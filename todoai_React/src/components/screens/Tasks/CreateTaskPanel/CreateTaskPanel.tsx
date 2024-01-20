import React, { useState } from 'react';
import styles from './CreateTaskPanel.module.css'
import CreateTaskForm from './CreateTaskForm/CreateTaskForm';

const CreateTaskPanel: React.FC = () => {
    const [showAuth, setShowAuth] = useState(false)

    const toggleAuth = () => {
        setShowAuth(prev => !prev)
    }
  return (

    <div className={styles.panel}>
        
        <CreateTaskForm />
    </div>

  )
}


export default CreateTaskPanel;
