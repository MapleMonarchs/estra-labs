import "../styles/Card.css";

export default function Card({ item }) {
    return(
        <div className="item-container">
            <p className="item-name">{item.name}</p>
            <p className="item-full-name">{item.full_name}</p>
            <p className="item-conc">{item.concentration}</p>
            <p className="item-price">{item.price}</p>
            <p className="item-desc">{item.desc}</p>
            <p>{}</p>
        </div>
    )
}