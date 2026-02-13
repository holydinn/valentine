import './App.css'
import {useRef, useState} from "react";
import {ModalNo} from "./components/ModalNo.tsx";
import {ModalYes} from "./components/ModalYes.tsx";

function App() {
    const [step, setStep] = useState(0);
    const [yesClicked, setYesClicked] = useState(false);
    const [isOpenModalNo, setIsOpenModalNo] = useState(false);
    const [isOpenModalYes, setIsOpenModalYes] = useState(false);
    const lastCall = useRef(0);

    const positions = [
        {top: 324, left: 310, text: 'нет'},
        {top: 444, left: 203, text: 'в смысле нет?'},
        {top: 300, left: -50, text: 'эй!!'},
        {top: 100, left: -115, text: 'хватит бегать за мной!'},
        {top: -120, left: 350, text: 'ваня!!!!'},
        {top: 20, left: 610, text: 'последний раз говорю'},
        {top: 200, left: 750, text: 'стой!!!!'},
        {top: 350, left: 450, text: 'одумайся!!!!!'}
    ];
    const currentPos = positions[step];
    const isFinal = step >= positions.length

    const handleHover = () => {
        if (isFinal) return;
        const now = Date.now();
        if (now - lastCall.current < 300) return;
        lastCall.current = now;
        setStep(step + 1);
    };

    const handleNoClick = () => {
        if (isFinal) {
            setIsOpenModalNo(true);
        }
    }

    const reset = () => {
        setStep(0);
        setYesClicked(false);
    }

    return (
        <>
            {yesClicked ? (
                <>
                    <div className="wrapper">
                        <p className='final-text'>люблю тебя! скоро увидимся!</p>
                        <button className={'btn btn-again'} onClick={reset}>попробовать еще раз</button>
                    </div>
                </>

            ) : (
                <div className="wrapper">
                    <img className='img-main' src={`${import.meta.env.BASE_URL}cute2.jpg`}/>
                    <p className='question'>будешь моей валентинкой? :)</p>
                    <div className="btn-container">
                        <button className={'btn btn-yes'} onClick={() => setIsOpenModalYes(true)}>да!</button>
                        <button
                            className={`btn btn-no ${isFinal ? 'btn-final' : ''}`}
                            onMouseEnter={handleHover}
                            onClick={handleNoClick}
                            style={isFinal ? {} : {
                                top: currentPos.top,
                                left: currentPos.left,
                            }}>
                            {isFinal ? 'нет' : currentPos.text}
                        </button>
                    </div>
                </div>
            )}


            <ModalNo isOpen={isOpenModalNo} yesClick={() => {
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
