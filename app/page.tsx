import Navbar from "./components/UI/navbar/Navbar";
import FAQ from "./components/content/faq/Faq";
import Features from "./components/content/features/Features";
import Footer from "./components/content/footer/Footer";
import FreeTrial from "./components/content/free-trial/FreeTrial";
import GetStarted from "./components/content/get-started/GetStarted";
import Header from "./components/content/header/Header";
import Integrations from "./components/content/integrations/Integrations";
import Testimonials from "./components/content/testimonials/Testimonials";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Integrations />
      <GetStarted />
      <Features />
      <FreeTrial />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
