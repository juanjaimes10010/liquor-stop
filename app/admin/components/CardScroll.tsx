import '@/app/styles/globals.css';
import '@/app/styles/card-scroll.css';

export default function CardScroll({ children }: { children: React.ReactNode }) {
    return (
        <div className="card__scroll">
            {children}
        </div>
    )
}