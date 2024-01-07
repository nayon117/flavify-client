const Menu = () => {
  return (
    <div className="section-container flex flex-col items-center py-48  justify-center">
      {/* text */}
      <div className="space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        Dive into Delights Of <span className="text-green">Delectable Food!</span>
        </h2>
        <p>
        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </p>
        <button className="btn bg-green text-white hover:text-green hover:bg-white py-3 px-4 rounded-full">
          Order Now
        </button>
      </div>
     
    </div>
  );
};
export default Menu;
