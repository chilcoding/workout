import gymVideo from "../../public/banner-video.mp4";

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Video Background */}
            <video 
                src={gymVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-full h-full opacity-65 text-white text-7xl text-center font-bold">
                Welcome <br /> To <br /> <span className="text-pink-500">Human Growth Center</span>
            </h1>
        </div>
    );
};

export default Home;
