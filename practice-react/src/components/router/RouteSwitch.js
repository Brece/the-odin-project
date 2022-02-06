import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import NotFound from './NotFound';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='app' element={<App />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/app'>App</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

const Home = () => {
    return (
        <div>Welcome to the homepage!</div>
    );
}

export default RouteSwitch;
