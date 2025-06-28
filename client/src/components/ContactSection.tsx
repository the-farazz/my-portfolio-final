import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useEmailJS } from '@/hooks/use-emailjs';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const { sendEmail, isLoading } = useEmailJS();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const success = await sendEmail(formData);
    if (true) {
      setFormData({ user_name: '', user_email: '', message: '' });
      alert(`Thank you ${formData.user_name}! Your message has been sent. I'll get back to you soon.`);
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "farazalam706@gmail.com",
      link: "mailto:farazalam706@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub", 
      value: "github.com/the-farazz",
      link: "https://github.com/the-farazz"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/the-farazz",
      link: "https://www.linkedin.com/in/the-farazz/"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/the-farazz/" },
    { icon: Github, href: "https://github.com/the-farazz" },
    { icon: Twitter, href: "https://twitter.com/the_farazzz" },
    { icon: Mail, href: "mailto:farazalam706@gmail.com" }
  ];

  return (
    <section id="contact" className="py-20 px-4 lg:px-8">
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

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[yellow] rounded-full flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-[rgb(30,30,30)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white light:text-gray-900">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-gray-400 hover:text-[yellow] transition-colors duration-300 light:text-gray-600"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[rgb(40,40,40)] rounded-full flex items-center justify-center hover:bg-[yellow] hover:text-[rgb(30,30,30)] transition-all duration-300 light:bg-gray-200 light:hover:bg-[yellow]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[rgb(40,40,40)] p-8 rounded-xl light:bg-white light:border light:border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(30,30,30)] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[yellow] transition-colors duration-300 light:bg-white light:border-gray-300 light:text-gray-900"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(30,30,30)] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[yellow] transition-colors duration-300 light:bg-white light:border-gray-300 light:text-gray-900"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 light:text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(30,30,30)] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[yellow] transition-colors duration-300 resize-none light:bg-white light:border-gray-300 light:text-gray-900"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
