import React, { useState } from "react";
import styles from './TaskItemCompleteButton.module.css'
import { AuthService } from "../../../../service/auth.service";
import { TaskService } from "../../../../service/task.service";


const requestFunc = async (accessToken: string, id: number) => {
  const response = await TaskService.addCompleteTask(accessToken, id)
  console.log('status --> ')
  return response
}

const TaskItemCompleteButton: React.FC<TaskItemCompleteButtonProps> = (props) => {
    const accessToken = localStorage.getItem('accessToken')
    const id = props.id
  
    const handleClick = async () => {
      if (accessToken){
        const response = await requestFunc(accessToken, id)
        if (response.status == 401){
          AuthService.refreshToken()
        }
        else{
          console.log(response.status)
        }
      }
    }

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>complete</button>
        </>
    );
};


export default TaskItemCompleteButton;