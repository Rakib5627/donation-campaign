

const CardD = ({ cardD }) => {

    const {id , picture, title, price, category, card_bg_color, category_bg_color, text_button_bg_color } = cardD;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl" style={{background : card_bg_color }}>
            <figure><img src={picture} alt="Shoes" className="h-full" /></figure>
            <div className="card-body">
            <p className="mr-28 sm:mr-96 lg:mr-44 lg:text-center" style={{background : category_bg_color , color : text_button_bg_color }} >{category}</p>
            <h2 className="card-title mt-2 font-semibold">{title}</h2>
                <p className="" style={{color : text_button_bg_color }}>{price}.00</p>
                <div className="card-actions justify-start">
                    <button className="btn text-white" style={{background : text_button_bg_color }}>View Details</button>
                </div>
            </div>
        </div>
    );
}; 

export default CardD;