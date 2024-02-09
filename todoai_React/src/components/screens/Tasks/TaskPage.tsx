import Navbar from "../global/Navbar/Navbar"
import TaskItem from "../Tasks/TaskItem/TaskItem"
import NavbarButton from "../global/Navbar/Navbar-button-register/Navbar-button-register"
import styles from './TaskPage.module.css'
import Sidebar from "../global/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import { TaskService } from "../../../service/task.service"
import Notification from "../global/Notification/Notification"

function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const deleteTask = (id: number) => {
    const index = tasks.findIndex(item => item.id === id)

    if (index !== -1) {
      const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      setTasks(updatedTasks);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        const response = await TaskService.getAllTasks(accessToken);
        if (response.status == 401) {
          fetchData();
        }
        setTasks(response.data)
      } else {
        setNotification('Please authenticate');
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
          <TaskItem key={task.id} task={task} deleteTask={deleteTask}></TaskItem>
          ))}
      </div>

      {notification && <Notification message={notification} />}

    </main>

  </div>
  )
}

export default TaskPage;
