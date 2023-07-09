import { createBrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import useAppSelector from '../hooks/useAppSelector';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const Example = loadable(() => import('../pages/example'), { fallback: <span>Carregando</span> });

const MyRoutes = () => {
    const { authenticated } = useAppSelector(state => state.auth);

    const AuthRoute = () => {
        if (authenticated) {
            return <Navigate to='/v1' replace />;
        }
        return <Outlet />;
    };

    const PrivateRoute = () => {
        if (!authenticated) {
            return <Navigate to='/example' replace />;
        }
        return (
            <>
                <Outlet />
            </>
        );
    };

    return (
        <Routes>
            <Route path='/' element={<AuthRoute />}>
                <Route path='/' element={<Example />} />
            </Route>
            <Route path='/example' element={<AuthRoute />}>
                <Route path='/example' element={<Example />} />
            </Route>
            <Route path='/examplePrivate' element={<PrivateRoute />}>
                <Route path='/examplePrivate' element={<Example />} />
            </Route>
        </Routes>
    );
};

export const router = createBrowserRouter([{ path: '*', Component: MyRoutes }]);
