import DeliverIcon from "@/app/assets/svg-components/DeliverIcon";
import InboxIcon from "@/app/assets/svg-components/InboxIcon";
import ReportIcon from "@/app/assets/svg-components/ReportIcon";
import Banner from "../../UI/banner/Banner";
import CardList, { Data } from "../../UI/banner/card-list/CardList";

const FEATURES: Data[] = [
  {
    label: "Share team inboxes",
    icon: <InboxIcon />,
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    label: "Deliver instant answers",
    icon: <DeliverIcon />,
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    label: "Manage your team with reports",
    icon: <ReportIcon />,
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
];
const Features = () => {
  return (
    <section className="text-center pb-16 sm:pb-24 px-0 sm:px-16">
      <Banner
        chipLabel="Features"
        title="Cutting-edge features for advanced analytics"
        subtitle="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
      />
      <CardList data={FEATURES} />
    </section>
  );
};

export default Features;
