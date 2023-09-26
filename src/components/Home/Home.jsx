import { useState } from "react";
import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";


const Home = () => {

    
    // console.log(keyword)
    const [value , setValue] = useState();
    
 
    return (
        <div>
            <div className=" max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full mx-auto"><Hero setValue={setValue}></Hero></div>
            <div className="lg:max-w-4xl xl:max-w-5xl mx-auto"><Cards value={value}></Cards></div>
        </div>

    );
};

export default Home;