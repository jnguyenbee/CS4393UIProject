import Signin from '../pages/User/Signin';
import Signup from '../pages/User/Signup';
import Index from '../pages/User/Index';

export default {
    path: '/user',
    component: Index,
    children: [{
            path: '/signin',
            name: 'Signin',
            component: Signin,
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
    ],
};