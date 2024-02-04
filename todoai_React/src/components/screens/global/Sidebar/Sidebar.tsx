import React, { useState } from 'react';
import styles from './Sidebar.module.css'
import { useNavigate } from 'react-router-dom';
import CreateTaskPanel from '../../Tasks/CreateTaskPanel/CreateTaskPanel';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [showPanel, setShowPanel] = useState(false)

  const showCreateTaskPanel = () => {
    setShowPanel(prev => !prev)
  }
    return (
        <div className={styles.sidebar}>
          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.topic} onClick={() => navigate('/tasks')}>Tasks/</div>
              <div className={styles.topic}>&nbsp;|--current</div>
              <div className={styles.topic} onClick={() => showCreateTaskPanel()}>&nbsp;|--create_new</div>
              <div className={styles.topic}>&nbsp;|--finished</div>
            </div>
          </div>
            {showPanel && <CreateTaskPanel onClose={showCreateTaskPanel}/>}
        </div>
    )
}


export default Sidebar;