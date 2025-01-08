const ProfileCard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-3 mt-12 gap-10 mx-auto max-w-4xl ">
        <div>
          <img
            className="h-auto max-w-full  rounded-lg aspect-square object-cover object-center"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=280"
            alt="image1"
          />
          <div className="mt-4 text-center">
            <h2 className="text-lg text-gray-800">Janette Lynch</h2>
            <h3 className="text-sm text-gray-500">Senior Director</h3>
          </div>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280"
            alt="image2"
          />
          <div className="mt-4 text-center">
            <h2 className="text-lg text-gray-800">Marcell Ziemann</h2>
            <h3 className="text-sm text-gray-500">Principal Strategist</h3>
          </div>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg aspect-square object-cover object-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&fit=crop&w=280"
            alt="image3"
          />
          <div className="mt-4  text-center">
            <h2 className="text-lg text-gray-800">Robert Palmer</h2>
            <h3 className="text-sm text-gray-500">Marketing Engineer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
