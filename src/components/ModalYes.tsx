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


                        <div className='title'>Congratulations!</div>

                        <img className='icon' src='public/cute.jpg'/>


                        <div className={'text'}>
                            You literally made the right choice - since the day you chose me actually hahahahahaha.
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
