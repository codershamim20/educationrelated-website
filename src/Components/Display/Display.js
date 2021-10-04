import React, { useEffect, useState } from 'react';

import Card from '../single-card/Card';

const Display = () => {
    const [cards, setCards] = useState([]);
    
    
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
            <h2 className='text-center'>COURSES WE OFFER </h2>
            <div className="row">
                <div className="col-md-12">
                    {/* card-display-area */}
                    <div className="row g-2">
                        {
                            cards.map(card => <Card
                                key={card.id}
                                card={card}
                            >

                            </Card>)
                        }
                    
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Display;