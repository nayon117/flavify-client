const OurServices = () => {

    const serviceList = [
        {id:1, title:"Catering", des:"Delight your guests with our flavors and  presentation", image:"/public/images/home/services/icon1.png"},
        {id:2, title:"Catering", des:"Delight your guests with our flavors and  presentation", image:"/public/images/home/services/icon1.png"},
        {id:3, title:"Online Ordering", des:"Explore menu & order with ease using our Online Ordering ", image:"/public/images/home/services/icon3.png"},
        {id:4, title:"Gift Cards", des:"Give the gift of exceptional dining with Foodi Gift Cards", image:"/public/images/home/services/icon4.png"},
    ]


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
            <button className="btn bg-green text-white rounded-full py-3 px-8">
              Explore
            </button>
          </div>
        </div>
        {/* image  */}
        <div className="md:w-1/2">
          <img
            src="/images/home/testimonials/testimonials.png"
            alt="testimonial image"
          />
        </div>
      </div>
    </div>
  );
};
export default OurServices;
