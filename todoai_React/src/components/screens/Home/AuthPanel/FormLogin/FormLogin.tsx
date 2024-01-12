import { useState } from "react";
import styles from './FormLogin.module.css'

interface FormProps {
    formType: 'login' | 'register'
    setFormType: (formType: 'login' | 'register') => void
}
  
  const AuthForm: React.FC<FormProps> = ({ formType, setFormType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      console.log("confirm")
    }

    const toggleForm = () => {
      setFormType(formType === "login" ? "register" : "login");
    };
  
    return (
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="">Email</label>
          <input 
            value={email}
            onChange={e => setEmail(e.target.value)}  
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}  
          />
        </div>
        <button className={styles.submitBtn} type="submit">
          LOGIN
        </button>
        <button className={styles.redirectBtn} onClick={toggleForm}>
          registration
        </button>
      </form>
    );
  }
  
  export default AuthForm;