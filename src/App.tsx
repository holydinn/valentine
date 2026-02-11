import './App.css'
import {useState} from "react";
import {ModalNo} from "./components/ModalNo.tsx";
import {ModalYes} from "./components/ModalYes.tsx";

function App() {
    const [pos, setPos] = useState({top: 324, left: 310});
    const [step, setStep] = useState(0);
    const [yesClicked, setYesClicked] = useState(false);
    const [isOpenModalNo, setIsOpenModalNo] = useState(false);
    const [isOpenModalYes, setIsOpenModalYes] = useState(false);

    const positions = [
        {top: 444, left: 203},
        {top: 300, left: -50},
        {top: 100, left: -115},
        {top: -150, left: 350},
        {top: 20, left: 610},
        {top: 300, left: 450},
        {top: 300, left: 450},
    ];

    const handleHover = () => {
        console.log(step)

        if (!isFinal) {
            setPos({
                top: positions[step].top,
                left: positions[step].left,
            });
            setStep(step + 1);
        }
    };

    const handleNoClick = () => {
        if (isFinal) {
            setIsOpenModalNo(true);
        }
    }

    const reset = () => {
        setPos({top: 324, left: 310})
        setStep(0);
        setYesClicked(false);
    }


    const isFinal = step >= positions.length
    return (
        <>
            {yesClicked ? (
                <>
                    <div className="wrapper">
                        <p className='final-text'>you make the right choice! see you soon!</p>
                        <button className={'btn btn-again'} onClick={reset}>try again</button>
                    </div>
                </>

            ) : (
                <div className="wrapper">
                    <img className='img-main' src='public/cute2.jpg'/>
                    <p className='question'>will you be my valentine? :)</p>
                    <div className="btn-container">
                        <button className={'btn btn-yes'} onClick={() => setIsOpenModalYes(true)}>yes!</button>
                        <button
                            className={`btn btn-no ${isFinal ? 'btn-final' : ''}`}
                            onMouseEnter={handleHover}
                            onClick={handleNoClick}
                            style={isFinal ? {} : {
                                top: pos.top,
                                left: pos.left,
                            }}>no
                        </button>
                    </div>
                </div>
            )}


            <ModalNo isOpen={isOpenModalNo} onClose={() => setIsOpenModalNo(false)} yesClick={() => {
                setIsOpenModalNo(false);
                setIsOpenModalYes(true);
            }}/>

            <ModalYes isOpen={isOpenModalYes} onClose={() => {
                setIsOpenModalYes(false)
                setYesClicked(true);
            }}
            />


        </>
    )
}

export default App
