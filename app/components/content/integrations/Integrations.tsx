import Dropbox from "@/app/assets/svg-components/Dropbox";
import GoogleDrive from "@/app/assets/svg-components/GoogleDrive";
import Intercom from "@/app/assets/svg-components/Intercom";
import Jira from "@/app/assets/svg-components/Jira";
import Notion from "@/app/assets/svg-components/Notion";
import Slack from "@/app/assets/svg-components/Slack";
import Banner from "../../UI/banner/Banner";
import CardList, { Data } from "../../UI/banner/card-list/CardList";

const INTEGRATIONS: Data[] = [
  {
    label: "Notion",
    icon: <Notion />,
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
  },
  {
    label: "Slack",
    icon: <Slack />,
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
  },
  {
    label: "Google Drive",
    icon: <GoogleDrive />,
    description:
      "Work faster and smarter by integrating directly with Drive, right in the app.",
  },
  {
    label: "Intercom",
    icon: <Intercom />,
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
  },
  {
    label: "Jira",
    icon: <Jira />,
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
  },
  {
    label: "Dropbox",
    icon: <Dropbox />,
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
  },
];

const Integrations = () => {
  return (
    <section className="text-center pb-24 px-0 sm:px-16">
      <Banner
        chipLabel="Integrations"
        title="Get more from your tools"
        subtitle="Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team’s favourite tools are just a
          click away."
      />
      <CardList data={INTEGRATIONS} isIntegration />
    </section>
  );
};

export default Integrations;
