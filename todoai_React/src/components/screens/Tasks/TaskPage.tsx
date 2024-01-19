import Navbar from "../global/Navbar/Navbar"
import TaskItem from "../Tasks/TaskItem/TaskItem"
import NavbarButton from "../global/Navbar/Navbar-button-register/Navbar-button-register"
import styles from './TaskPage.module.css'
import Sidebar from "../global/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import { TaskService } from "../../../service/task.service"

function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken')

      if (accessToken) {
        const response = await TaskService.getAllTasks(accessToken)
        console.log(response.data)
        setTasks(response.data)
      }
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log('here-->', tasks)
  }, [tasks]);

  return (
  <div className={styles.body}>
    <Navbar/>

    <main className={styles.main}>
      <Sidebar></Sidebar>
      <div className={styles.content}>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task}></TaskItem>
          ))}
      </div>
    </main>

  </div>
  )
}

export default TaskPage
