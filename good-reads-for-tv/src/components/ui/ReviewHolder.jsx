import { useState } from "react";
import {FaStar } from "react-icons/fa"
// import {Cotainer, Radio, Rating} from 

const ReviewHolder = () => {
    // const [rate, setRate] = useState(null);
    return (
        <div className="flex">
            {[...Array(4)].map((start)=>{
                return <FaStar color="gold" size={15}/>
            })}
            {[...Array(1)].map((start)=>{
                return <FaStar color="white" size={15}/>
            })}
        </div>
    );
};
 


export default ReviewHolder;