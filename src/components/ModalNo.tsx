import './Modal.css'
import '../App.css'

export function ModalNo({isOpen, onClose, yesClick}: { isOpen: boolean, onClose: () => void, yesClick: () => void }) {
    if (!isOpen) return null;

    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={onClose}>
                    <div
                        className="modal-no"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={'title'}>как ты мог сказать НЕТ!</div>
                        <img className='icon' src='/angry.png'/>

                        <div className='text'>
                            <p>ну если ты так решил...</p>
                            <p>у меня есть заманчивое предложение! можешь оформить подписку на валентин plus </p>
                            <ul>
                                <li>никакой рекламы</li>
                                <li>доступ ко всем фишкам</li>
                                <li>только любовь и романтика</li>
                            </ul>
                            <p>оформи сегодня всего за</p>
                            <div>
                                <div>
                                    <p>1 000 000 поцелуйчиков на год</p>
                                    <p>83 333 в месяц</p>
                                </div>
                                <div>
                                    <p>100 000 поцелуйчиков на месяц</p>
                                    <p>пробная версия 3 дня</p>
                                </div>
                            </div>
                            <p> или просто скажи "да"...</p>
                        </div>
                        <button className={'btn btn-yes'} onClick={yesClick}>
                            конечно да, любимая!
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
