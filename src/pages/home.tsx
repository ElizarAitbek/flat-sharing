import { ApplyNow } from "../components/apply-now/apply-now";
import { Banner } from "../components/banner/banner";
import { CommunityList } from "../components/community-list/community";
import { FrequentlyAskedQuestions } from "../components/faq/faq";
import { HowItWorks } from "../components/how-it-works/how-it-works";
import { Layout } from "../layout/layout/layout";

export const Home = () => {
  return (
    <Layout>
      <Banner />
      <CommunityList />
      <HowItWorks />
      <FrequentlyAskedQuestions />
      <ApplyNow />
    </Layout>
  );
};
