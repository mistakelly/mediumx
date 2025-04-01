import PublicHeader from "@/components/public/Header";
import HeroSection from "@/layouts/public/HeroSection";
import TrendPage from "../../layouts/public/TrendPage";
import TrendCard from "@/components/public/TrendStoryCard";
import PreviewStoryPage from "../../layouts/public/PreviewStoryPage";
import PreviewStoryIntro from "@/components/public/preview/PreviewStoryIntro";
import MainContent from "@/components/public/preview/MainContent";
import Story from "@/components/public/preview/Story";
import { RenderAuthModal } from "@/components/public/auth/RenderAuthModal";
import { useAuthHandleModal } from "@/hooks/auth/useAuthHandleModal";
import { UserStoryPref } from "@/components/public/StoryPref";

function LandingPage() {
  useAuthHandleModal();

  return (
    <>
      <UserStoryPref />
      {/* <RenderAuthModal />
      <PublicHeader />
      <HeroSection />
      <TrendPage>
        <TrendCard trendNo={1} />
        <TrendCard trendNo={2} />
        <TrendCard trendNo={3} />
      </TrendPage>
      <PreviewStoryPage>
        <PreviewStoryIntro />
        <MainContent>
          <Story />
          <Story />
          <Story />
          <Story />
        </MainContent>
      </PreviewStoryPage> */}
    </>
  );
}

export default LandingPage;
