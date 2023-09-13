import { useState } from "react";

const Share = () => {
    const [showShare, setShowShare] = useState(false);
    
    function closeModal() {
        return setShowShare(false);
    }

    return (
        <div>
        <button className="text-md text-black dft-btn round" onClick={() => setShowShare(true)}>
            Share
        </button>
        {showShare && 
            (
                //Replace with Share Modal
                <dialog open className="round bg-[--grey]">
                <div className="bg[--grey] flex-col p-4">
                    <button className="text-lg text-[--orange]" onClick={closeModal}>&times;</button>
                    <h2>Replace with modal!</h2>
                </div>
                </dialog>
            )
        }
        </div>
    )
}

export default Share;