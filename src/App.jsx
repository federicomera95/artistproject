//react
import { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Links from './pages/Links';
import Search from './pages/Search';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import AddAudio from './pages/AddAudio';
import AddPhoto from './pages/AddPhoto';
import AddVideo from './pages/AddVideo';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';

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
        <>
            <Outlet />
            {!matchNav.some((path) => pathname.includes(path)) && pathname !== '/' && <Navbar />}
        </>
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
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
            </Routes>
            {/* to call snackbar import toast and call method:
            toast('text here',{autoClose: milliseconds autoclose, type: 'success' || 'error'});  */}
            <Snackbar />
        </>
    );
};
export default App;
