import { Eye, Mail, Download } from "lucide-react";
import DP from "@/asset/DP.jpeg";
import DP2 from "@/asset/DP2.jpg";
import DP3 from "@/asset/DP3.jpg";
import resume from "../asset/Faraz(BSCS)-UoK-UBIT.pdf";
import resume2 from "../../public/Faraz(BSCS)-UoK-UBIT.pdf";
import Test from "../asset/Test";

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left slide-up">
          <p className="text-lg text-gray-300 mb-4 light:text-gray-600">
            Hello,
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white light:text-gray-900">
            I'm <span className="text-[yellow]">Faraz Alam,</span>
          </h1>
          <h1 className="text-4xl lg:text-6xl mb-6  text-[yellow]">
            Software Engineer
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl light:text-gray-500">
            Building engaging digital experiences with modern web technologies.
            Passionate about creating user-friendly websites and applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
         
            <a
              href={resume2}
              download="Faraz(BSCS)-UoK-UBIT"
              className="bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300 flex items-center justify-center"
            >
           
                <Download className="w-4 h-4 mr-2" />
                Resume
            </a>
            {/* <button
              onClick={() => handleScrollToSection('#projects')}
              className="bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300 flex items-center justify-center"
            >
              <Eye className="w-4 h-4 mr-2" />
              View My Work
            </button> */}
            <button
              onClick={() => handleScrollToSection("#contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[rgb(30,30,30)] transition-all duration-300 flex items-center justify-center light:border-gray-900 light:text-gray-900 light:hover:bg-gray-900 light:hover:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end fade-in">
          <div className="relative">
            <img
              src={DP2}
              alt="Faraz Alam - Front-End Developer"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-[yellow] shadow-2xl"
            />

            {/* Floating React Icon */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[yellow] rounded-full flex items-center justify-center text-[rgb(30,30,30)] font-bold text-xl animate-bounce">
              ⚛️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
