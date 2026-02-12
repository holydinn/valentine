import './Modal.css'
import '../App.css'
import {useState} from "react";

export function ModalNo({isOpen, yesClick}: { isOpen: boolean, yesClick: () => void }) {
    if (!isOpen) return null;

    const [selectedBlock, setSelectedBlock] = useState(0);

    return (
        <>
            {isOpen && (
                <div className="overlay">
                    <div
                        className="modal-no"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={'title'}>как ты мог сказать НЕТ!</div>
                        <img className='icon' src={`${import.meta.env.BASE_URL}angry.png`}/>

                        <div className='text'>
                            <p>ну если ты так решил... у меня есть заманчивое предложение!</p>
                            <p>можешь оформить подписку на <b>valentine premium</b> прямо сегодня</p>
                        </div>

                        <div className="list">
                            <div className="list-item">
                                <img src={`${import.meta.env.BASE_URL}check.svg`}/>
                                10 возможностей нажать на кнопку "нет"
                            </div>
                            <div className="list-item">
                                <img src={`${import.meta.env.BASE_URL}check.svg`}/>
                                доступ ко всем premium фишкам
                            </div>
                            <div className="list-item">
                                <img src={`${import.meta.env.BASE_URL}check.svg`}/>
                                безграничная любовь и романтика
                            </div>
                        </div>
                        <div className={'blocks'}>
                            <div
                                onClick={() => {
                                    setSelectedBlock(0);
                                }}
                                className={`block ${selectedBlock === 0 ? 'block-black' : 'block-white'} `}>
                                <div className={'block-title'}>
                                    <p>1 год</p> <p>1 000 000 поцелуйчиков</p>
                                </div>
                                <div className={'block-info'}>
                                    <p className={'extra-text'}>Экономия 17%</p> 83 333 в месяц
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    setSelectedBlock(1);
                                }}
                                className={`block ${selectedBlock === 1 ? 'block-black' : 'block-white'} `}>
                                <div className={'block-title'}>
                                    <p>1 месяц</p> <p>100 000 поцелуйчиков</p>
                                </div>
                                <div className={'block-info'}>
                                   бесплатная пробная версия 3 дня
                                </div>

                            </div>
                        </div>
                        <div className='text'><p>или просто скажи <i>"да"</i>...</p></div>

                        <button className={'btn btn-yes btn-modal'} onClick={yesClick}>
                            конечно да, любимая!
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
