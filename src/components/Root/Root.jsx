import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className=" max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            <Header></Header>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;