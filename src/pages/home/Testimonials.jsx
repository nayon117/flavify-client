import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center md:flex-row gap-12 justify-between">
        <div className="md:w-1/2">
          <img
            src="/images/home/testimonials/testimonials.png"
            alt="testimonial image"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-left space-y-4">
            <h2 className="subtitle">Testimonials</h2>
            <h2 className="title">what our customers say about us</h2>
            <blockquote>
              “I had the pleasure of dining at Foodi last night, and I am still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>
            {/* avater */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/public/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/public/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/public/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              {/* customer */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Customers Feedback</h3>
                <div className="flex items-center gap-2 ">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">4.8</span>
                  <span>18.6k reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
