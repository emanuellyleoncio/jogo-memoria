import './style.css';
import CardBack from '../../assets/card-back.png';

function Cards({ card, stateCard, setStateCard }) {

    function handleTurnedCard() {
        const localCards = [...stateCard];

        const currentCard = localCards.find((item) => {
            return item.id === card.id;
        });

        const onlyTurnedCards = localCards.filter((item) => item.turned);

        if (onlyTurnedCards.length > 1) {
            return;
        };

        if (onlyTurnedCards.length && card.slug === onlyTurnedCards[0].slug) {
            currentCard.turned = !currentCard.turned;
            setStateCard(localCards);

            setTimeout(() => {
            
                if(currentCard.id === onlyTurnedCards[0].id) {
                    return
                };
                
                const filteredCards = localCards.filter((item) => {
                    return item.id !== currentCard.id && item.id !== onlyTurnedCards[0].id;
                })
                
                setStateCard(filteredCards);
            }, 800)
        
            return
        };

        
        currentCard.turned = !currentCard.turned;
        setStateCard(localCards);
        
        if (onlyTurnedCards.length) {
            setTimeout(() => {
                localCards.forEach((item) => {
                    item.turned = false;
                });
    
                setStateCard([...localCards]);
            }, 600)
        };
    };

    return (
        <img
            className="card"
            src={card.turned ? card.image : CardBack}
            alt="Carta"
            onClick={() => handleTurnedCard()}
        />
    );
};

export default Cards;