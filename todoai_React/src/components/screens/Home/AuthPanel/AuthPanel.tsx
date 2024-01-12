import React from 'react';
import styles from './AuthPanel.module.css'
import AuthForm from './AuthForm/AuthForm'

const AuthPanel: React.FC = () => {
    return (
        <div className={styles.auth_panel}>
          <AuthForm isLogin={true}/>
        </div>
    )
}


export default AuthPanel;
