import { useState } from "react";

interface FormProps {
    isLogin: boolean;
  }
  
  const AuthForm: React.FC<FormProps> = ({ isLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      if(isLogin) {
        // send login request
      } else {
        // register user 
      }
    }
  
    return (
      <form onSubmit={onSubmit}>
        <input 
          value={email}
          onChange={e => setEmail(e.target.value)}  
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}  
        />
        <button type="submit">
          {isLogin ? 'Войти' : 'Зарегистрироваться'}  
        </button>
      </form>
    );
  }
  
  export default AuthForm;