import Index from './components/Index';
import Register from './components/Register';
 
export const routes = [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    }
];