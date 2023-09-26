import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationApplication } from "../../Utility/localStorage";


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(job => job.id === idInt);
    

    const handleDonate = () =>{
        saveDonationApplication(idInt);
        toast('Congrats! Donation Successful');
    }


    return (
        <div className="max-w-6xl mx-auto mt-10">
            
            <div className="card relative">
                <figure><img src={card.picture} alt="" className="w-full" /></figure>
                <div className="card-body absolute -bottom-4 -left-4 md:bottom-0 md:left-0 md:bg-opacity-50 md:bg-black w-full">
                    <div className="card-actions justify-start">
                        <button onClick={handleDonate} className="btn border-black btn-xs sm:btn-sm md:btn-md lg:btn-lg" style={{background : card.text_button_bg_color }}>Donate {card.price}</button>
                    </div>
                    
                </div>
            </div>
            

            <h2 className="text-5xl font-bold my-10">{card.title}</h2>
            <p>{card.description}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CardDetails;