import TaskItemCompleteButton from '../TaskItemCompleteButton/TaskItemCompleteButton'
import TaskItemRemoveButton from '../TaskItemRemoveButton/TaskItemRemoveButton'
import styles from './TaskItem.module.css'

export default function TaskItem({task}: {task: Task}) {
    return(
        <div className={styles.taskItemCard}>
            <div className={styles.info}>
                <div className={styles.taskItemTitle}>id: {task.id}</div>
                <div className={styles.taskItemQuantity}>{task.is_completed ? 'Completed' : 'Not Completed'}</div>
            </div>

            <div className={styles.taskItemTopic}>Task: {task.text}</div>

            <div className={styles.removeBtn}>
                <TaskItemRemoveButton id = {task.id}/>
            </div>

            <div className={styles.completeBtn}>
                <TaskItemCompleteButton id = {task.id}/>
            </div>
        </div>
    )
}