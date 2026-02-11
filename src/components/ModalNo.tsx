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


                        <div className={'title'}>How dare you say NO!</div>

                        <img className='icon' src='public/angry.png'/>

                        <div className='text'>
                            <p>Try Valentine Plus today!</p>
                            <p>Navigation with no ads</p>

                            <p>Unlock the full valentine experience</p>
                            <p>No cancellations</p>

                            <p>£999 Anual £87 monthly</p>
                            <p> £99 Monthly 7 days free trails</p>

                            <p> Or just say Yes...</p>
                        </div>



                        <button className={'btn btn-yes'} onClick={yesClick}>
                            yes
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
