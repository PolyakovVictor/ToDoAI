interface User {
    username: string,
    email: string,
    password: string,
}

interface RegisterService {
    register(userData: User): Promise<any>;
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