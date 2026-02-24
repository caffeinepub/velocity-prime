import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import TimelineSection from './components/TimelineSection';
import DiagnosticsSection from './components/DiagnosticsSection';
import MonitoringSection from './components/MonitoringSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import EnrollmentSection from './components/EnrollmentSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-vp-dark text-vp-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropositionSection />
        <TimelineSection />
        <DiagnosticsSection />
        <MonitoringSection />
        <PricingSection />
        <FAQSection />
        <EnrollmentSection />
      </main>
      <Footer />
    </div>
  );
}
