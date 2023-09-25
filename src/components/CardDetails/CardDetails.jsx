import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(job => job.id === idInt);
    console.log(card);


    return (
        <div className="max-w-6xl mx-auto mt-10">
            
            <div className="card relative">
                <figure><img src={card.picture} alt="" className="w-full" /></figure>
                <div className="card-body absolute bottom-0 left-0 bg-opacity-50 bg-black w-full">
                    <div className="card-actions justify-start">
                        <button className="btn border-black" style={{background : card.text_button_bg_color }}>Donate {card.price}</button>
                    </div>
                </div>
            </div>

            <h2 className="text-5xl font-bold my-10">{card.title}</h2>
            <p>{card.description}</p>
        </div>
    );
};

export default CardDetails;