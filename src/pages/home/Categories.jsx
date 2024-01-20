const Categories = () => {
  const categoriesItems = [
    {
      id: 1,
      title: "Main Dish",
      desc: "86 dish",
      img: "/images/home/category/img1.png",
    },
    {
      id: 2,
      title: "Breakfast",
      desc: "(12 breakfast)",
      img: "/images/home/category/img2.png",
    },
    {
      id: 3,
      title: "Dessert",
      desc: "(48 dish)",
      img: "/images/home/category/img3.png",
    },
    {
      id: 4,
      title: "Browse All",
      desc: "(1275 dish)",
      img: "/images/home/category/img4.png",
    },
  ];
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <h2 className="subtitle">Customer Favorites</h2>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* category items */}
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-around items-center mt-12">
        {categoriesItems?.map((item, idx) => (
          <div
            key={idx}
            className="shadow-md rounded-md bg-white py-6 px-5 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div>
              <img
                src={item.img}
                alt=""
                className="p-5 bg-first rounded-md w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
