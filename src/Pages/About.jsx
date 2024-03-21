import ProfileCard from "../Components/ProfileCard";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-screen-xl mx-auto">
        <div className="text-center mt-16">
          <h1 className="text-4xl lg:text-5xl lg:tracking-tight font-bold">
            About
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are a small passionate team.
          </p>
        </div>
        <div className="flex flex-col gap-3 mx-auto mt-16 max-w-4xl">
          <h2 className="font-bold text-3xl text-gray-800">
            Empowering the world with Astro.
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            We are a multi-cultural team from around the world! We come from
            diverse backgrounds, bringing different personalities, experiences
            and skills to the job. This is what makes our team so special.
          </p>
        </div>

        <ProfileCard />
      </div>
    </>
  );
};

export default About;
