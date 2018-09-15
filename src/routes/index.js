import App from '../pages/App';
import Login from '../pages/Login';
import NotPage from '../pages/404';
import Cal from '../pages/Calculator';

import {Public} from '../HOC';

const indexRoutes = [
    {
        name: 'App',
        path: '/',
        component: Public(App),
    },
    {
        name: 'Login',
        path: '/login',
        component: Public(Login),
    },
    {
        name: 'Calculator',
        path: '/calculator',
        component: Public(Cal),
    },
    {
        name: '404',
        path: '*',
        component: NotPage,
    },
];

export default indexRoutes;
