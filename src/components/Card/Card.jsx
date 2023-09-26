import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const Card = ({ card }) => {
    const {id , picture, title, category, card_bg_color, category_bg_color, text_button_bg_color } = card;
    return (
        <div className="">
            <Link to={`/details/${id}`}>
        <div className="card rounded" style={{background : card_bg_color }}>
           <img src={picture} alt="Shoes" className="w-full" />
            <div className="my-5">
                <p className=" ml-2 lg:mr-36 text-center" style={{background : category_bg_color , color : text_button_bg_color }} >{category}</p>
                <h2 className="card-title mx-2 mt-2 font-semibold" style={{color : text_button_bg_color }}>{title}</h2>
            </div>
        </div>
        </Link>
        </div>
    );
};

Card.propTypes ={
    card : PropTypes.object
}

export default Card;