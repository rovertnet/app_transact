
function Banner() {
  return (
    <>
      <div className=" md:px-14 px-4 max-w-screen-2xl mx-auto my-24">
        <div className=" md:p-9 px-4 py-9 bg-[#096cff] rounded-tl-[100px] rounded-br-[100px]">
          <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* image */}
            <div>
              <img
                className=" lg:h-full w-full"
                src="../../../../public/img_banner.png"
                alt="a propos"
              />
            </div>
            {/* La présentation */}
            <div className=" md:w-full">
              <h2 className=" md:text-3xl text-2xl font-bold text-white mb-6 leading-relaxed">
                Je suis le premier de ce bannier, en répresentant Artha beauté.
              </h2>
              <p className=" text-[#f3f4f5] text-xl mb-5 md:text-justify text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos sint facere ad, veniam earum quas quasi! 
              </p>
              <div className=" space-x-5 space-y-4 ">
                <button className=" py-3 px-6 text-base rounded-3xl bg-pink-500 text-white hover:bg-purple-500 transition-all duration-300">
                  Payer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner