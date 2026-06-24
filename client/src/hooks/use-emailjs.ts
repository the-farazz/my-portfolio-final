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

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzboEUrLbKpJ-B7FJ-3fLFZrUcIbxmX-g3xABtAlKWwibFFvn5weuyizn3ukx74HZs/exec';

export function useEmailJS() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    try {
      emailjs.init(PUBLIC_KEY);
      
      // 1. Send via EmailJS
      const emailPromise = emailjs.send(SERVICE_ID, TEMPLATE_ID, data as Record<string, unknown>);

      // 2. Save to Google Sheets (if URL is provided)
      let sheetPromise = Promise.resolve() as Promise<any>;
      if (GOOGLE_SCRIPT_URL) {
        // Use text/plain to avoid CORS preflight request blocking
        sheetPromise = fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(data),
        }).catch(err => console.error("Sheet Error:", err));
      }

      await Promise.all([emailPromise, sheetPromise]);
      console.log('Email and Sheet updated successfully!');
      
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
