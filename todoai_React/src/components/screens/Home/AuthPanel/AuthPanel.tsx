import React, { useState } from 'react';
import styles from './AuthPanel.module.css'
import FormLogin from './FormLogin/FormLogin'
import FormRegister from './FormRegister/FormRegister'

const AuthPanel: React.FC = () => {
  const [formType, setFormType] = useState('login');
  return (

      <div className={styles.auth_panel}>
        {formType === 'login' ? (
          <FormLogin formType={formType} setFormType={setFormType} />
        ) : (
          <FormRegister formType={formType} setFormType={setFormType} />
        )}
      </div>

  )
}


export default AuthPanel;
