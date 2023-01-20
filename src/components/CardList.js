
import Card from "./Card"

export default function CardList({ items }) {
    return items.map((item, i) => <Card key={i} item={item}/>)
}