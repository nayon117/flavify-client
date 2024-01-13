import { useEffect } from "react";
import { useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

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

      let sortedItems = [...filteredItems]
      
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
      setFilteredItems(sortedItems)
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

      <div className="section-container">
        {/* btns and sorts */}
        <div>
          {/* all category data */}
          <div className="flex justify-start items-center gap-8 flex-wrap font-medium my-3">
            <button onClick={showAll}
            className={selectCategory==="all"? "active" : ""}
            >All</button>
            <button onClick={() => filterItems("salad")}
            className={selectCategory==="salad"? "active" : ""}
            >Salad</button>
            <button onClick={() => filterItems("pizza")}
            className={selectCategory==="pizza"? "active" : ""}
            >Pizza</button>
            <button onClick={() => filterItems("soup")}
            className={selectCategory==="soup"? "active" : ""}
            >Soups</button>
            <button onClick={() => filterItems("dessert")}
            className={selectCategory==="dessert"? "active" : ""}
            >Dessert</button>
            <button onClick={() => filterItems("drinks")}
            className={selectCategory==="drinks"? "active" : ""}
            >Drinks</button>
          </div>

          {/* sorting based on filtering */}
          <div>
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white"/>
            </div>

            {/* sorting options */}
            <select name="sort" id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high-to-low</option>
            </select>
          </div>
        </div>
        
        {/* product card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            filteredItems?.map(item=><Cards key={item._id} item={item}/>)
          }
        </div>
      </div>
    </div>
  );
};
export default Menu;
