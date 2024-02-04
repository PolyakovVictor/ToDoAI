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
    createNewTask(accessToken : string, task: Task): Promise<any>;
    addCompleteTask(accessToken : string, id: number): Promise<any>;
}

interface FormProps {
    formType: 'login' | 'register'
    setFormType: (formType: 'login' | 'register') => void
    onClose: () => void;
}

interface AuthPanelProps {
    onClose: () => void;
    defaultFormType?: 'login' | 'register'; 
  }

interface Task {
    id: number;
    text: string;
    createdAt: Date;
    finishedAt: Date | null;
    is_completed: boolean; 
}

interface NavbarButtonProps {
    children: React.ReactNode;
}

interface TaskItemCompleteButtonProps {
    id: number;
}

interface CreateTaskPanelProps {
    onClose: () => void;
}