import * as React from 'react';
import { Switch as Routes, IndexRoute, Route, Link } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

// render - dashboard
const DashboardDefault = Loadable(React.lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(React.lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(React.lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(React.lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(React.lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(React.lazy(() => import('pages/components-overview/AntIcons')));

const AuthLogin = Loadable(React.lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(React.lazy(() => import('pages/authentication/Register')));

export default function ThemeRoutes() {
    return (
        <>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. */}
            <Routes>
                <Route path={['/dashboard/default', '/typography', '/color', '/shadow', '/sample-page', '/icons/ant']}>
                    <MainLayout>
                        <Routes>
                            <Route path="/dashboard/default">{<DashboardDefault />} </Route>
                            <Route path="/typography">{<Typography />} </Route>
                            <Route path="/color">{<Color />}</Route>
                            <Route path="/shadow">{<Shadow />}</Route>
                            <Route path="/sample-page">{<SamplePage />}</Route>
                            <Route path="/icons/ant">{<AntIcons />}</Route>
                        </Routes>
                    </MainLayout>
                </Route>
                <Route path={['/register', '/login']}>
                    <MinimalLayout>
                        <Routes>
                            <Route path="/register">{<AuthRegister />}</Route>
                            <Route path="/login">{<AuthLogin />}</Route>
                        </Routes>
                    </MinimalLayout>
                </Route>
            </Routes>
        </>
    );
}
