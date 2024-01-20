const OurServices = () => {
  const serviceList = [
    {
      id: 1,
      title: "Catering",
      des: "Delight your guests with our flavors and  presentation",
      image: "/public/images/home/services/icon1.png",
    },
    {
      id: 2,
      title: "Catering",
      des: "Delight your guests with our flavors and  presentation",
      image: "/public/images/home/services/icon1.png",
    },
    {
      id: 3,
      title: "Online Ordering",
      des: "Explore menu & order with ease using our Online Ordering ",
      image: "/public/images/home/services/icon3.png",
    },
    {
      id: 4,
      title: "Gift Cards",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
      image: "/public/images/home/services/icon4.png",
    },
  ];

  return (
    <div className="section-container my-16">
      <div className="flex flex-col items-center md:flex-row gap-12 justify-between">
        {/* text  */}
        <div className="md:w-1/2">
          <div className="text-left space-y-4">
            <h2 className="subtitle">Our Story & Services</h2>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <blockquote>
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </blockquote>
            <button className="btn bg-first text-white rounded-full py-3 px-8">
              Explore
            </button>
          </div>
        </div>
        {/* image  */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {serviceList?.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-first cursor-pointer hover:border-second transition-all duration-300 hover:border"
              >
                <img src={service?.image} alt="icons" className="mx-auto" />
                <h3 className="pt-3 font-medium">{service?.title}</h3>
                <p>{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
