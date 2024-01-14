import styles from './TaskItem.module.css'

export default function TaskItem({task}: {task: Task}) {
    return(
        <div className={styles.todoItemCard}>
            <div className={styles.taskItemTitle}>{task.id}</div>

            <div className={styles.taskItemTopic}>Taste: {task.text}</div>

            <div className={styles.taskItemContent}>{task.text}</div>

            <div className={styles.taskItemQuantity}>{task.isCompleted ? 'Completed' : 'Not Completed'}</div>
        </div>
    )
}
