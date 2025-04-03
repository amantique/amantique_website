"use client";

const VideoPage = () => {
  return (
    <div
      className="w-full text-center bg-cover bg-center bg-no-repeat text-[#0A0A0A] pb-10"
      style={{ backgroundImage: "url('/img/live/153A1422.jpg')" }}
    >
      <h2 className="text-5xl sm:text-7xl lg:text-9xl text-white font-extrabold pt-4 drop-shadow-lg">
        VIDÉOS
      </h2>

      <div className="flex flex-col items-center text-white relative overflow-hidden cursor-pointer transition-transform transform hover:scale-105 bg-opacity-80 px-4 mx-6 sm:mx-10 mt-6">
        <div className="relative w-full max-w-screen-lg aspect-video overflow-hidden mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/alw4OCDB05Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
