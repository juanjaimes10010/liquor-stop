import Image from "next/image";

import '@/app/styles/global.css';
import '@/app/styles/card.css';

export default function CardDelete({data}: {data: any}) {
    
    const { image, date } = data;

    return (
        <div className="card__delete">
            <div className="card__delete__image">
                <Image />
            </div>
            <div className="card__delete__footer">
                <button>Cancel</button>
                <button>Delete</button>
            </div>
        </div>
    );   
}