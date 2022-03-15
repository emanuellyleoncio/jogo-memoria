import './style.css';

function Sidebar({ cards, setStateCard }) {
    
    function handleReset() {
        cards.forEach((card) => {
            card.turned = false;
        });

        setStateCard(cards);
    };

    return (
        <div className="container">
            <div className="sidebar">
                <h1>JOGO DA MEMÓRIA</h1>
                <button
                    onClick={() => handleReset()}
                >
                    RESET
                </button>
            </div>
        </div>
    );
};

export default Sidebar;