import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskPage from '../screens/Tasks/TaskPage'
import HomePage from '../screens/Home/HomePage'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<TaskPage />} path='/Task' />
            <Route element={<HomePage />} path='/' />

            <Route element={<div>Not found</div>} path='*'/>
        </Routes>
    </BrowserRouter>
}

export default Router