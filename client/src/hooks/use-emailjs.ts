import { useState } from 'react';
import emailjs from '@emailjs/browser';

export interface EmailData {
  from_name: string;
  from_email: string;
  phone: string;
  message: string;
  name: string;
  email: string;
}

const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '-FzhskqiTwcouVy1c';
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_or2nn9k';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_yfan3xb';

export function useEmailJS() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    try {
      emailjs.init(PUBLIC_KEY);
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, data as Record<string, unknown>);
      console.log('EmailJS success:', result);
      return true;
    } catch (error: any) {
      console.error('EmailJS error:', error);
      alert(`Debug - Error: ${error?.text || error?.message || JSON.stringify(error)}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading };
}
