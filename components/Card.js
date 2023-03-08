import styles from "../styles/card.module.css";

export default function Card({ item }) {
    return(
        <div className={styles.itemContainer}>
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.itemFullName}>{item.full_name}</p>
            <p className={styles.itemConc}>{item.concentration}</p>
            <p className={styles.itemPrice}>{item.price}</p>
        </div>
    )
}