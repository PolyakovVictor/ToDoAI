import Navbar from "../global/Navbar/Navbar"
import TaskItem from "../Tasks/TaskItem/TaskItem"
import NavbarButton from "../global/Navbar/Navbar-button/Navbar-button"
import fruitsData from './data.json'
import styles from './TaskPage.module.css'
import Sidebar from "../global/Sidebar/Sidebar"

function TaskPage() {

    return (
    <div className={styles.body}>
      <Navbar>
        <NavbarButton />
      </Navbar>

      <main className={styles.main}>
        <Sidebar></Sidebar>
        <div className={styles.content}>
          {fruitsData.fruits.map(task => (
            <TaskItem key={task.name} task={task}></TaskItem>
            ))}
        </div>
      </main>

    </div>
)
}

export default TaskPage
