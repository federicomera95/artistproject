//react
import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom';

//pages
import Login from './pages/Login';
import Register from './pages/Register';
const Home = lazy(() => import('./pages/Home'));
const Links = lazy(() => import('./pages/Links'));
const Search = lazy(() => import('./pages/Search'));
const Explore = lazy(() => import('./pages/Explore'));
const Profile = lazy(() => import('./pages/Profile'));
const AddAudio = lazy(() => import('./pages/AddAudio'));
const AddPhoto = lazy(() => import('./pages/AddPhoto'));
const AddVideo = lazy(() => import('./pages/AddVideo'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
import Loading from './pages/Loading';

//component
import Snackbar from './components/atoms/Snackbar';
import Navbar from './components/molecules/Navbar';
import useFetch from './hooks/useFetch';
import { find, remove } from './utility/storage';

const ProtectedLayout = () => {
    const [data, loading, error] = useFetch('/auth/me', {
        headers: { Authorization: `Bearer ${find('token').token}` }
    });

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const matchNav = ['/links', '/edit', '/add-audio', '/add-photo', '/add-video'];

    useEffect(() => {
        if (error) {
            remove('token');
        }
    }, [error]);

    useEffect(() => {
        if (pathname === '/') {
            navigate('/home');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <Suspense fallback={<Loading />}>
                {(!loading && !error && !!data && (
                    <>
                        {(data.status === 200 && (
                            <>
                                <Outlet />
                                {!matchNav.some((path) => pathname.includes(path)) &&
                                    pathname !== '/' && <Navbar />}
                            </>
                        )) || <Navigate to='/login' />}
                    </>
                )) ||
                    (error && <Navigate to='/login' />)}
            </Suspense>
        </>
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/' element={<ProtectedLayout />}>
                    <Route path='home' element={<Home />} />
                    <Route path='search' element={<Search />} />
                    <Route path='explore' element={<Explore />} />
                    <Route path='profile'>
                        <Route index element={<Profile />} />
                        <Route path='edit' element={<EditProfile />} />
                        <Route path='links' element={<Links />} />
                        <Route path='add-audio' element={<AddAudio />} />
                        <Route path='add-photo' element={<AddPhoto />} />
                        <Route path='add-video' element={<AddVideo />} />
                    </Route>
                </Route>
                <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
            {/* to call snackbar import toast and call method:
            toast('text here',{autoClose: milliseconds autoclose, type: 'success' || 'error'});  */}
            <Snackbar />
        </>
    );
};
export default App;
