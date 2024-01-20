import { FormEvent, useState } from "react";
import styles from './FormLogin.module.css'
import { AuthService } from "../../../../../service/auth.service";
import { useNavigate } from "react-router-dom";


const submitForm = async (userData: userLoginData) => {
  const response = await AuthService.login(userData);
  return response
}
  
const AuthForm: React.FC<FormProps> = ({ formType, setFormType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log('login FORM')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData: userLoginData = {
      'username': username,
      'password': password,
    }

    const response = submitForm(userData)
    if (await response) {
      navigate('/tasks')
    }
  }

  const toggleForm = () => {
    setFormType(formType === "login" ? "register" : "login");
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h1>LOGIN</h1>
      <div className={styles.field}>
        <label htmlFor="">Username</label>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}  
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