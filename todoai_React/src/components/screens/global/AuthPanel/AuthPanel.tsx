import React, { useState } from 'react';
import styles from './AuthPanel.module.css'
import FormLogin from './FormLogin/FormLogin'
import FormRegister from './FormRegister/FormRegister'

const AuthPanel: React.FC<AuthPanelProps> = ({defaultFormType = 'login', onClose}) => {
  const [formType, setFormType] = useState(defaultFormType);
  return (

    <div className={styles.auth_panel}>
      {formType === 'login' ? (
        <FormLogin formType={formType} setFormType={setFormType} onClose={onClose} />
      ) : formType === 'register' ? (
        <FormRegister formType={formType} setFormType={setFormType} onClose={onClose} />
      ) : null}
    </div>

  )
}


export default AuthPanel;
