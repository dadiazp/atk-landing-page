import AccordionComponent from "../../UI/accordion/Accordion";
import Banner from "../../UI/banner/Banner";

const FAQ = () => {
  return (
    <section className="text-center py-16 sm:py-24 px-2 sm:px-16">
      <Banner
        title="Frequently asked questions"
        subtitle="Everything you need to know about the product and billing."
      />
      <AccordionComponent />
    </section>
  );
};

export default FAQ;
