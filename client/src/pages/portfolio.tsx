import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

// Lazy-load below-the-fold sections for better initial load performance
const AboutSection = lazy(() => import('@/components/AboutSection'));
const EducationSection = lazy(() => import('@/components/EducationSection'));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const CertificationsSection = lazy(() => import('@/components/CertificationsSection'));
const FutureGoalsSection = lazy(() => import('@/components/FutureGoalsSection'));
const HobbiesSection = lazy(() => import('@/components/HobbiesSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

function SectionFallback() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <FutureGoalsSection />
        <HobbiesSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </main>
  );
}
