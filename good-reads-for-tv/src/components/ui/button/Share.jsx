import { useState } from "react";
import ShareModel from '../../common/ShareModal'


const Share = () => {
    const [showShare, setShowShare] = useState(false);

    return (
        <div>
        <button className="text-md text-black dft-btn round" onClick={() => setShowShare(true)}>
            Share
        </button>
        {showShare && <ShareModel setShowShare={setShowShare} />}
        </div>
    )
}

export default Share;