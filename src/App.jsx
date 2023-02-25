import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import EditProfile from './pages/EditProfile';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Links from './pages/Links';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Search from './pages/Search';
import Navbar from './components/molecules/Navbar';

const Root = () => {
    const { pathname } = useLocation();

    const matchNav = ['/links', '/edit', '/add-audio'];

    return (
        <div>
            <Outlet />
            {!matchNav.some((path) => pathname.includes(path)) && pathname !== '/' && <Navbar />}
        </div>
    );
};

const App = () => {
    return (
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
                </Route>
            </Route>
        </Routes>
    );
};
export default App;
