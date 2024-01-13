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
}

interface NavbarProps {
    children?: React.ReactNode
}

interface FormProps {
    formType: 'login' | 'register'
    setFormType: (formType: 'login' | 'register') => void
}

interface FormProps {
    formType: 'login' | 'register'
    setFormType: (formType: 'login' | 'register') => void
}

interface Props {
    task: {
        name: string,
        taste: string,
        description: string,
        quantity: number,
    }
}