import React from "react";

const News = ({ newses }) => {
  return (
    <div className="font-custom h-auto w-full bg-white flex flex-col items-center mt-12 py-12">
      <span className="w-[80%] lg:w-[40%] text-3xl lg:text-4xl font-bold text-center mt-2 ">
        Keep Up With Our Most Recent{" "}
        <span className="text-blue_new">Medical News.</span>{" "}
      </span>
      <span className="w-[60%] text-center mt-4 text-[#888] mb-10">
        Upgrade your health app with real-time ambulance tracking, telemedicine
        services.
      </span>
      <div className="bg-white h-auto w-auto grid grid-cols-1 md:grid-cols-3 place-items-center px-14 xl:px-40 pb-16">
        {newses.map((news, index) => (
          <div
            key={index}
            className="blog_hover news_hover shadow-lg m-6 md:m-4 bg-white rounded-xl h-[500px] md:h-[400px] lg:h-[450px] xl:[500px] w-[100%] md:w-[90%] m-10flex flex-col items-center"
          >
            <div
              className="bg-white rounded-t-xl h-1/2 w-full"
              key={index}
              style={{
                backgroundImage: `url(${news.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col p-5 h-1/2 justify-center space-y-3 bg-black bg-opacity-0">
              <div className="bg-red_new text-white h-7 w-28 flex items-center justify-center">
                {news.date}
              </div>
              <span className="w-full text-xl font-semibold text-blue_new">
                {news.title}
              </span>
              <span className="visible md:hidden lg:flex w-full text-sm ">
                {news.description}
              </span>
            </div>
            <div className="bg-black news_hover_div snimate animate-increaseWidthLeft"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
