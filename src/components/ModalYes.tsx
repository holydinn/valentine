import './Modal.css'

export function ModalYes({isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={onClose}>
                    <div
                        className="modal-no"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='title'>поздравляю!!</div>
                        <img className='icon' src={`${import.meta.env.BASE_URL}cute.jpg`}/>
                        <div className='text'>
                            рада, что ты сделал правильный выбор! на самом деле, ты сделал его уже в день, когда выбрал
                            меня хихихихи
                        </div>
                        <button className={'btn btn-yes btn-modal'} onClick={onClose}>
                            тьмок!
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
