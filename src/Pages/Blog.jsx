import BlogContent from "../Components/BlogContent";

const Blog = () => {
  return (
    <>
      <div className="px-5 max-w-screen-xl mx-auto">
        <div className="text-center mt-16">
          <h1 className="text-4xl lg:text-5xl lg:tracking-tight font-bold">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We write about building startups and thoughts going on our mind.
          </p>
        </div>

        <BlogContent />
      </div>
    </>
  );
};

export default Blog;
