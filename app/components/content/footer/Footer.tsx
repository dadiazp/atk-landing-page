import Navbar from "../../UI/navbar/Navbar";
import DownloadApp from "./download-app/DownloadApp";
import LinksList from "./links-list/LinksList";

export interface LinksInterface {
  label: string;
  new: boolean;
}
const PRODUCTS: LinksInterface[] = [
  {
    label: "Overview",
    new: false,
  },
  {
    label: "Features",
    new: false,
  },
  {
    label: "Solutions",
    new: true,
  },
  {
    label: "Tutorials",
    new: false,
  },
  {
    label: "Pricing",
    new: false,
  },
  {
    label: "Releases",
    new: false,
  },
];

const COMPANY = [
  {
    label: "About us",
    new: false,
  },
  {
    label: "Carrers",
    new: false,
  },
  {
    label: "Press",
    new: false,
  },
  {
    label: "News",
    new: false,
  },
  {
    label: "Media kit",
    new: false,
  },
  {
    label: "Contact",
    new: false,
  },
];
const Footer = () => {
  return (
    <>
      <section className="pt-16 pb-12 px-2 sm:px-16">
        <footer className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex gap-14 order-last sm:order-first">
            <LinksList data={PRODUCTS} title={"Products"} />
            <LinksList data={COMPANY} title={"Company"} />
          </div>
          <DownloadApp />
        </footer>
      </section>
      <Navbar footer={true} />
    </>
  );
};

export default Footer;
