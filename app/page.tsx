import Navbar from "./components/UI/navbar/Navbar";
import Features from "./components/content/features/Features";
import Footer from "./components/content/footer/Footer";
import GetStarted from "./components/content/get-started/GetStarted";
import Header from "./components/content/header/Header";
import Integrations from "./components/content/integrations/Integrations";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Integrations />
      <GetStarted />
      <Features />
      <Footer />
    </>
  );
}
