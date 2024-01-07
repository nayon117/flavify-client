import { useEffect } from "react";
import { useState } from "react";

const Menu = () => {
    const [menu, setMenu] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectCategory, setSelectCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default")

    // load data
    useEffect(() => {
        const fetchData = async () => {
           try {
               const res = await fetch('/menu.json')
               const data = await res.json()
               console.log(data);

           } catch (error) {
            console.log(error);
            }
        }
        fetchData()
    },[])




  return (
    <div>
      {/* banner text */}
      <div className="section-container flex flex-col items-center py-48  justify-center">
        {/* text */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Dive into Delights Of{" "}
            <span className="text-green">Delectable Food!</span>
          </h2>
          <p>
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-green text-white hover:text-green hover:bg-white py-3 px-4 rounded-full">
            Order Now
          </button>
        </div>
      </div>

      {/* menu shop bar */}

      <div className="section-container"></div>
    </div>
  );
};
export default Menu;
