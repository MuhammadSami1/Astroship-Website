import Svg from "../Components/Svg";
import FeatureCard from "../Components/FeatureCard";
import HeroSection from "../Components/HeroSection";
import PromotionalSection from "../Components/PromotionalSection";

const Home = () => {
  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <HeroSection />
      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Everything you need to start a website
        </h2>
        <p className="text-lg mt-4 text-slate-600">
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        <FeatureCard
          title={"Bring Your Own Framework"}
          description={
            "Build your site using React, Svelte, Vue, Preact, web components, or just plain HTML + JavaScript."
          }
        />
        <FeatureCard
          title={"100% Static HTML, No JS"}
          description={
            "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default."
          }
        />
        <FeatureCard
          title={"On-Demand Components"}
          description={
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page."
          }
        />
        <FeatureCard
          title={"Broad Integration"}
          description={
            "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages."
          }
        />
        <FeatureCard
          title={"SEO Enabled"}
          description={
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!"
          }
        />
        <FeatureCard
          title={"Community"}
          description={
            "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions."
          }
        />
      </div>

      <div className="mt-24">
        <h2 className="text-center text-gray-500">
          Works with your technologies
        </h2>
        <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <Svg />
        </div>
      </div>

      <PromotionalSection />
    </div>
  );
};

export default Home;
