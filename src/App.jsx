import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import ReservationsCalendar from './components/ReservationsCalendar';
import Navbar from './components/Navbar';
import Cookies from 'js-cookie';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="app">
      <Navbar />
      <ReservationsCalendar />
    </div>
  );
}

export default App;
