import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards , setCards] = useState([]);

    useEffect( () => {
        fetch('donate.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    return (
        <div className="mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
           
        </div>
    );
};

export default Cards;