export default function Footer() {
  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(40,40,40)] py-12 border-t border-gray-800 light:bg-gray-50 light:border-gray-200">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white light:text-gray-900">Faraz Alam</h3>
          <p className="text-gray-400 mb-8 light:text-gray-600">Front-End Developer | React.js Specialist</p>
          
          {/* Footer Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-400 hover:text-[yellow] transition-colors duration-300 light:text-gray-600 light:hover:text-[yellow]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8 light:border-gray-300">
            <p className="text-gray-400 text-sm light:text-gray-600">
            Made with ❤ by Faraz Alam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
