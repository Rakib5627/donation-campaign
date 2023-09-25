import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div>
            <div className="xl:max-w-7xl mx-auto"><Hero></Hero></div>
            <Cards></Cards>
        </div>

    );
};

export default Home;