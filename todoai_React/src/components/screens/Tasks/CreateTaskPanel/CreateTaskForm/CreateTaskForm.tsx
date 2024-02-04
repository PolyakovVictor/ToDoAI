import { FormEvent, useState } from "react";
import styles from './CreateTaskForm.module.css'
import { useNavigate } from "react-router-dom";
import { TaskService } from "../../../../../service/task.service";
import { AuthService } from "../../../../../service/auth.service";


const submitForm = async (accessToken: string, taskData: Task) => {
  const response = await TaskService.createNewTask(accessToken, taskData)
  return response
}
  
const CreateTaskForm: React.FC<CreateTaskPanelProps> = ({onClose}) => {
  const accessToken = localStorage.getItem('accessToken')
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const close = () => {
    onClose();
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskData: Task = {
      'text': text,
    }
    if (accessToken){
      const response = await submitForm(accessToken, taskData)
      if (response.status == 401){
        await AuthService.refreshToken()
        onSubmit(e)
      }
      else{
        console.log(response.status)
        close()
      }
    }
  }


  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h1>CREATE NEW TASK</h1>
      <div className={styles.field}>
        <label htmlFor="">Text</label>
        <textarea
          rows={5}
          value={text}
          onChange={e => setText(e.target.value)}  
        />
      </div>
      
      <button className={styles.submitBtn} type="submit">
        CREATE
      </button>
    </form>
  );
}

export default CreateTaskForm;