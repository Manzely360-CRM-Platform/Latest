import Hero from '../components/Hero';
import CertifiedProjects from '../components/CertifiedProjects';
import Services from '../components/Services';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CertifiedProjects />
      <Services />
      <Partners />
      <ContactForm />
    </>
  );
}
