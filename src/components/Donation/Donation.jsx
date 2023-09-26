import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardApplication } from "../../Utility/localStorage";
import CardD from "../CardD/CardD";


const Donation = () => {
    const donatedCards = useLoaderData();

    const [donation , setDonation] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect( ()=>{
        const storedCardIds = getStoredCardApplication();
        if (donatedCards.length > 0){

            const cardsDonated = [];
            for (const id of storedCardIds){
                const donate = donatedCards.find(donate => donate.id === id);
                if(donate){
                    cardsDonated.push(donate)
                }
            }
            setDonation(cardsDonated);
        }
    }
        , [])

    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    donation.slice(0, dataLength).map(cardD => <CardD key={cardD.id} cardD={cardD}></CardD>)
                }
            </div>
            <div className={dataLength === donation.length ? 'hidden' : 'text-center'}>
                   <button
                    onClick={() => setDataLength(donation.length)}
                    className="btn bg-red-500 hover:bg-red-600 mt-10 text-white">Show All
                    </button>
            </div>
        </div>
    );
};

export default Donation;