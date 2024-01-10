import React from 'react';
import styles from './Sidebar.module.css'

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.topic}>Tasks/</div>
              <div className={styles.topic}>&nbsp;|--current</div>
              <div className={styles.topic}>&nbsp;|--create_new</div>
              <div className={styles.topic}>&nbsp;|--finished</div>
            </div>
          </div>
        </div>
    )
}


export default Sidebar;