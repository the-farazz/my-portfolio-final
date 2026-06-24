import { certifications, CERTIFICATES_DRIVE_LINK } from '@/data/certifications';
import { ExternalLink } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">
            Certifications & Learning
          </h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[rgb(30,30,30)] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 light:bg-white light:border light:border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[yellow] rounded-full flex items-center justify-center">
                  <span className="text-[rgb(30,30,30)] text-2xl">{cert.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[yellow] mb-2">{cert.title}</h3>
              <p className="text-white font-medium mb-3 light:text-gray-800">{cert.organization}</p>
              <p className="text-gray-500 text-sm light:text-gray-500">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Google Drive Link */}
        <div className="text-center mt-12">
          <a
            href={CERTIFICATES_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300 light:bg-gray-900 light:text-white light:hover:bg-[yellow] light:hover:text-gray-900"
          >
            <ExternalLink className="w-4 h-4" />
            View All Certificates
          </a>
        </div>
      </div>
    </section>
  );
}
