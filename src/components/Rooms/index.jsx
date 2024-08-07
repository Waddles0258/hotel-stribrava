import { Room } from "../Room";
import React, { useState, useEffect } from 'react';

export const Rooms = ({onVote}) => {
    const [infoRooms, setInfoRooms] = useState(null);

    const callApi = async () => {
        const response = await fetch('http://localhost:4000/api/rooms');
        const data = await response.json();
        setInfoRooms(data.data); // Логируем полученные данные
    };

    const handleClick = () =>{
        console.log(' jkfdhkjlf'+element)
        onVote({ type: element.type, cost: element.cost, text: element.text, img: element.img })
    }

    useEffect(() => {
        callApi();
    }, []);

    return (
        <>
            <section className="dark">
                <div className="container">
                    <h2>Naše pokoje</h2>
                    <p>
                        Vyberte si, který z našich pokojů je pro vás ten pravý.
                    </p>
                    <div className="cards-row">
                        {infoRooms && infoRooms.map((element) => (
                            <Room               
                            onClick={() => {
                                onVote({ type: element.type, cost: element.cost, text: element.text, img: element.img });
                              }}
                                key={element.id} 
                                type={element.type} 
                                cost={element.cost} 
                                text={element.text} 
                                img={element.img}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};