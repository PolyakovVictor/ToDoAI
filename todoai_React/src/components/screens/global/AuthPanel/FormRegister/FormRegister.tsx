import { FormEvent, useState } from "react";
import styles from './FormRegister.module.css'
import { AuthService } from "../../../../../service/auth.service";

  
const AuthForm: React.FC<FormProps> = ({ formType, setFormType }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData: userRegisterData = {
      username,
      email,
      password
    };
    const response = await AuthService.register(userData);
    console.log(response)
    if (response.status == 201){
      toggleForm()
    } else {
      console.log('Error: ', response.data)
    }
  }

  const toggleForm = () => {
    setFormType(formType === "login" ? "register" : "login");
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h1>REGISTRATION</h1>
      <div className={styles.field}>
        <label htmlFor="">Username</label>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}  
        />
      </div>
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
      <div className={styles.field}>
        <label htmlFor="">Password_2</label>
        <input
          type="password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}  
        />
      </div>

        <button className={styles.submitBtn} type="submit">
          REGISTRATION
        </button>


        <button className={styles.redirectBtn} onClick={toggleForm}>
          login
        </button>

    </form>
  );
}

export default AuthForm;