import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/page';
import Login from './pages/login/page';
import Signup from './pages/signup/page';
import DashboardPage from './components/Dashboard';
import OrdersPage from './pages/(dashboard)/orders/page';
import ScrapePage from './pages/(dashboard)/scrape/page';
import SettingsPage from './pages/(dashboard)/settings/page';
import ConfigPage from './pages/config/page';
import './index.css';

// We adjust the layout slightly since in Next.js it took children prop, 
// but in React Router we use <Outlet />
import Sidebar from "./components/Sidebar";
const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/config" element={<ConfigPage />} />
        
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/scrape" element={<ScrapePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
