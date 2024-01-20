interface userRegisterData {
    username: string,
    email: string,
    password: string,
}

interface userLoginData {
    username: string,
    password: string,
}

interface AuthService {
    register(userData: userRegisterData): Promise<any>;
    login(userData: userLoginData) : Promise<any>;
    refreshToken(): Promise<any>;
}

interface TaskService {
    getAllTasks(accessToken : string): Promise<any>;
}

interface FormProps {
    formType: 'login' | 'register'
    setFormType: (formType: 'login' | 'register') => void
}

interface AuthPanelProps {
    defaultFormType?: 'login' | 'register'; 
  }

interface Task {
    id: number;
    text: string;
    createdAt: Date;
    finishedAt: Date | null;
    isCompleted: boolean; 
}

interface NavbarButtonProps {
    children: React.ReactNode
}