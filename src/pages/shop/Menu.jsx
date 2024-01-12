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
            //    console.log(data);
               setMenu(data)
               setFilteredItems(data)

           } catch (error) {
            console.log(error);
            }
        }
        fetchData()
    },[])

    // filtering data based on category
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter(item => item.category === category);
        setFilteredItems(filtered);
        setSelectCategory(category)
    }

    // show all data
    const showAll = () => {
        setFilteredItems(menu)
        setSelectCategory("all")
    }

    // sorting based a-z , z-a , low to high
    const handleSortChange = (option) => {
        setSortOption(option)

      let sortedItems = [...filterItems]
      
      // logic
      switch(option) {
        case "A-Z":
          sortedItems.sort((a,b)=>a.name.localeCompare(b.name))
          break;
        case "Z-A":
          sortedItems.sort((a,b)=>b.name.localeCompare(a.name))
          break;
        case "low-to-high":
          sortedItems.sort((a,b)=>a.price - b.price)
          break;
        case "high-to-low":
          sortedItems.sort((a,b)=>b.price - a.price)
          break;
        
        default:
          // code block
          break;
      }
    }

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
