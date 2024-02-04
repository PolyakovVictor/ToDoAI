import React, { useState } from 'react';
import styles from './CreateTaskPanel.module.css'
import CreateTaskForm from './CreateTaskForm/CreateTaskForm';

const CreateTaskPanel: React.FC<CreateTaskPanelProps> = ({onClose}) => {
  return (

    <div className={styles.panel}>
        
        <CreateTaskForm  onClose={onClose}/>
    </div>

  )
}


export default CreateTaskPanel;
