import { useState } from 'react';

interface EmailData {
  user_name: string;
  user_email: string;
  message: string;
}

export function useEmailJS() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Load EmailJS if not already loaded
      if (typeof window !== 'undefined' && !(window as any).emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const emailjs = (window as any).emailjs;
      
      if (!emailjs) {
        throw new Error('EmailJS not loaded');
      }

      // Initialize EmailJS with public key from environment or fallback
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY || 'REd2YveYe0XT5-tCUTmdx';
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID || 'service_xfm2ylx';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID || 'template_2w61f53';

      await emailjs.send(serviceId, templateId, data, publicKey);
      
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading };
}
