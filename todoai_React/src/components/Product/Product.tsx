import styles from './Product.module.css'

export default function Product(props) {
    return(
        <div className={styles.product_card}>
            <div className={styles.product_title}>{props.fruit.name}</div>

            <div className={styles.product_topic}>Taste: {props.fruit.taste}</div>

            <div className={styles.product_content}>{props.fruit.description}</div>

            <div className={styles.product_quantity}>{props.fruit.quantity} left</div>
        </div>
    )
}
