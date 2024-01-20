import bannerImg from "../../public/images/home/banner.png";
const Banner = () => {
  return (
    <div className="section-container flex flex-col-reverse md:flex-row items-center my-12 ">
      {/* text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Indulge in Scrumptious <span className="text-first">Delights!</span>
        </h2>
        <p>
          Where Each Plate Unfolds a Tale of Culinary Mastery and Passionate
          Craftsmanship.
        </p>
        <button className="btn bg-first text-white hover:text-first hover:bg-white py-3 px-4 rounded-full">
          Order Now
        </button>
      </div>
      {/* image */}
      <div className="flex-1">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};
export default Banner;
