import { lazy } from 'react';
import { Switch as Routes, Route, Link } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Routes>
            <Route path="/register">{<AuthRegister />}</Route>
            <Route path="/login">{<AuthLogin />}</Route>
        </Routes>
    </>
);

export default MinimalLayout;
