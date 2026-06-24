'use client';
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { useEmailJS } from '@/hooks/use-emailjs';
import { useToast } from '@/hooks/use-toast';

const emptyForm = {
  from_name: '',
  from_email: '',
  phone: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState(emptyForm);
  const { sendEmail, isLoading } = useEmailJS();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields marked with *.",
        variant: "destructive",
        className: "bg-red-950 border-2 border-red-500 text-white",
      });
      return;
    }

    const success = await sendEmail({
      ...formData,
      name: formData.from_name,
      email: formData.from_email,
    });

    if (success) {
      setFormData(emptyForm);
      toast({
        title: "Message Sent! 🎉",
        description: `Thank you ${formData.from_name}! I'll get back to you soon.`,
        className: "bg-[rgb(40,40,40)] border border-[yellow] text-white shadow-[0_0_15px_rgba(255,255,0,0.3)]",
      });
    } else {
      toast({
        title: "Message Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        className: "bg-red-950 border-2 border-red-500 text-white",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone,    title: 'Phone',    value: '03273129464',                 link: 'tel:+923273129464' },
    { icon: Mail,     title: 'Email',    value: 'farazalam706@gmail.com',      link: 'mailto:farazalam706@gmail.com' },
    { icon: Github,   title: 'GitHub',   value: 'github.com/the-farazz',       link: 'https://github.com/the-farazz' },
    { icon: Linkedin, title: 'LinkedIn', value: 'linkedin.com/in/the-farazz',  link: 'https://www.linkedin.com/in/the-farazz/' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/the-farazz/' },
    { icon: Github,   href: 'https://github.com/the-farazz' },
    { icon: Twitter,  href: 'https://twitter.com/the_farazzz' },
    { icon: Mail,     href: 'mailto:farazalam706@gmail.com' },
  ];

  const inputClass =
    'w-full px-4 py-3 bg-[rgb(30,30,30)] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[yellow] transition-colors duration-300 light:bg-white light:border-gray-300 light:text-gray-900';

  return (
    <section id="contact" className="py-12 lg:py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto light:text-gray-600">
            Please fill the contact form below to discuss any work opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[yellow] mb-6">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed mb-8 light:text-gray-600">
                I'm always open to discussing new opportunities, collaborating on interesting projects,
                or just having a chat about web development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[yellow] rounded-full flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-[rgb(30,30,30)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white light:text-gray-900">{info.title}</h4>
                    <a href={info.link} className="text-gray-400 hover:text-[yellow] transition-colors duration-300 light:text-gray-600">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[rgb(40,40,40)] rounded-full flex items-center justify-center hover:bg-[yellow] hover:text-[rgb(30,30,30)] transition-all duration-300 light:bg-gray-200 light:hover:bg-[yellow]"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[rgb(40,40,40)] p-8 rounded-xl light:bg-white light:border light:border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Your Name <span className="text-[yellow]">*</span>
                </label>
                <input
                  type="text" id="from_name" name="from_name"
                  value={formData.from_name} onChange={handleChange} required
                  className={inputClass} placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Your Email <span className="text-[yellow]">*</span>
                </label>
                <input
                  type="email" id="from_email" name="from_email"
                  value={formData.from_email} onChange={handleChange} required
                  className={inputClass} placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  className={inputClass} placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Your Message <span className="text-[yellow]">*</span>
                </label>
                <textarea
                  id="message" name="message" rows={5}
                  value={formData.message} onChange={handleChange} required
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed light:bg-gray-900 light:text-white light:hover:bg-[yellow] light:hover:text-gray-900"
              >
                <Mail className="w-4 h-4 mr-2" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

