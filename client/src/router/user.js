import Signin from '../pages/User/Signin';
import Signup from '../pages/User/Signup';
import Index from '../pages/User/Index';
import Secure from '../pages/Admin/Secure';
export default {
    path: '/',
    component: Index,
    children: [{
            path: '/signin',
            name: 'Signin',
            component: Signin,
        },
        {
            path: '/',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/secure',
            name: 'Secure',
            component: Secure,
        },
    ],
};