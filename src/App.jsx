//react
import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';

//pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Links = lazy(() => import('./pages/Links'));
const Search = lazy(() => import('./pages/Search'));
const Explore = lazy(() => import('./pages/Explore'));
const Profile = lazy(() => import('./pages/Profile'));
const AddAudio = lazy(() => import('./pages/AddAudio'));
const AddPhoto = lazy(() => import('./pages/AddPhoto'));
const AddVideo = lazy(() => import('./pages/AddVideo'));
const Register = lazy(() => import('./pages/Register'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
import Loading from './pages/Loading';

//component
import Snackbar from './components/atoms/Snackbar';
import Navbar from './components/molecules/Navbar';

const Root = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const matchNav = ['/links', '/edit', '/add-audio', '/add-photo', '/add-video'];

    useEffect(() => {
        if (pathname === '/') {
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Suspense fallback={<Loading />}>
            <Outlet />
            {!matchNav.some((path) => pathname.includes(path)) && pathname !== '/' && <Navbar />}
        </Suspense>
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/' element={<Root />}>
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
                <Route path='*' element='Not Found' />
            </Routes>
            {/* to call snackbar import toast and call method:
            toast('text here',{autoClose: milliseconds autoclose, type: 'success' || 'error'});  */}
            <Snackbar />
        </>
    );
};
export default App;
