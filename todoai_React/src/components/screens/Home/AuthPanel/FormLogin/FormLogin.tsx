import { useState } from "react";
import styles from './FormLogin.module.css'
import { AuthService } from "../../../../../service/auth.service";

  
  const AuthForm: React.FC<FormProps> = ({ formType, setFormType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      const userData: userLoginData = {
        'email': email,
        'password': password,
      }
      AuthService.login(userData)
    }

    const toggleForm = () => {
      setFormType(formType === "login" ? "register" : "login");
    };
  
    return (
      <form onSubmit={onSubmit} className={styles.form}>
        <h1>LOGIN</h1>
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