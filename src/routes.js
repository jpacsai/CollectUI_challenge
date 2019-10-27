import Home from './components/Home/Home';
import Signup from './components/1_Signup/Signup';
import NotFoundPage from './components/8_404/NotFoundPage';

export const paths = {
  HOME : '/',
  NOTFOUND: '/404',
  SIGNUP : '/signup'
}

export default [
  { path: paths.HOME, component: Home, exact: true },
  { path: paths.NOTFOUND, component: NotFoundPage, exact: true },
  { path: paths.SIGNUP, component: Signup, exact: true },
];