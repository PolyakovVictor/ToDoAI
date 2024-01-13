import styles from './TaskItem.module.css'

export default function TaskItem(props: Props) {
    return(
        <div className={styles.todoItemCard}>
            <div className={styles.taskItemTitle}>{props.task.name}</div>

            <div className={styles.taskItemTopic}>Taste: {props.task.taste}</div>

            <div className={styles.taskItemContent}>{props.task.description}</div>

            <div className={styles.taskItemQuantity}>{props.task.quantity} left</div>
        </div>
    )
}
