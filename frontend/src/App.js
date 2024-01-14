import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import UserProvider from './context/user-context';
function App() {
  return (
    <>
    <UserProvider>
        <Header />
        <main className = 'py-3'>
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
    </UserProvider>
    </>
  );
}

export default App;
