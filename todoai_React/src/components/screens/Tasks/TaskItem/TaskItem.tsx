import TaskItemButton from '../TaskItemButton/TaskItemButton'
import styles from './TaskItem.module.css'

export default function TaskItem({task}: {task: Task}) {
    return(
        <div className={styles.taskItemCard}>
            <div className={styles.info}>
                <div className={styles.taskItemTitle}>id: {task.id}</div>
                <div className={styles.taskItemQuantity}>{task.isCompleted ? 'Completed' : 'Not Completed'}</div>
            </div>

            <div className={styles.taskItemTopic}>Task: {task.text}</div>

            <div className={styles.btn}>
                <TaskItemButton/>
            </div>
        </div>
    )
}