import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import ProgressPage from './pages/ProgressPage';
import PaymentPage from './pages/PaymentPage';
import CreditPage from './pages/CreditPage';
import HelpPage from './pages/HelpPage';
import FlowPage from './pages/FlowPage';
import ChatbotWidget from './components/ChatbotWidget';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/flow" element={<FlowPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/credit" element={<CreditPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Route>
      </Routes>
      <ChatbotWidget />
    </BrowserRouter>
  );
}

export default App;
