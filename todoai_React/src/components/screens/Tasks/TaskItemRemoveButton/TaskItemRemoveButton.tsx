import React, { useState } from "react";
import styles from './TaskItemRemoveButton.module.css'
import { AuthService } from "../../../../service/auth.service";
import { TaskService } from "../../../../service/task.service";


const requestFunc = async (accessToken: string, id: number) => {
  const response = await TaskService.deleteTask(accessToken, id)
  console.log('status --> ')
  return response
}

const TaskItemRemoveButton: React.FC<TaskItemDeleteButtonProps> = (props) => {
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
          props.deleteTask(id)
        }
      }
    }

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>delete</button>
        </>
    );
};


export default TaskItemRemoveButton;