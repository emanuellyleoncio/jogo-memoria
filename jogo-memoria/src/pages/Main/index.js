import './style.css';
import Sidebar from '../../components/Sidebar';
import Cards from '../../components/Cards';
import cardsObject from '../../cards';
import { useState } from 'react';
import Congrats from '../../assets/congrats.png';

function Main() {

  const [ stateCard, setStateCard ] = useState([...cardsObject]);

  return (
    <div className="container">
      <Sidebar
        cards={cardsObject}
        setStateCard={setStateCard}
      />
      <div className="container-main">
        <div
          className='container-card'
          style={{'justifyContent' : `${stateCard.length ? 'flex-start' : 'center'}`}}
        >
          {stateCard.length ?
            stateCard.map((card) => (
              <Cards
                key={card.id}
                card={card}
                stateCard={stateCard}
                setStateCard={setStateCard}
              />
            ))
            :
            <img src={Congrats} alt="Parabéns"/>
          }
        </div>
      </div>
    </div>
  );
}

export default Main;