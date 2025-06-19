import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/navbar/MainHeader';
import ScrollToTop from './utils/scrollToTop';
import QR from './components/QR';
import Foods from './pages/foods/Foods';
import Drinks from './pages/drinks/Drinks';
import Breakfast from './pages/foods/Breakfast';
import Pasta from './pages/foods/Pasta';
import Toasts from './pages/foods/Toasts';
import Burgers from './pages/foods/Burgers';
import Rissoto from './pages/foods/Rissoto';
import Salads from './pages/foods/Salads';
import Sandwiches from './pages/foods/Sandwiches';
import Deserts from './pages/foods/Deserts';
import Appetizers from './pages/foods/Appetizers';
import Home from './pages/Home';
const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        {/* foods */}
        <Route path='/' element={<Home />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/foods/breakfast' element={<Breakfast />} />
        <Route path='/foods/appetizers' element={<Appetizers />} />
        <Route path='/foods/pasta' element={<Pasta />} />
        <Route path='/foods/toasts' element={<Toasts />} />
        <Route path='/foods/burgers' element={<Burgers />} />
        <Route path='/foods/rissoto' element={<Rissoto />} />
        <Route path='/foods/salads' element={<Salads />} />
        <Route path='/foods/sandwiches' element={<Sandwiches />} />
        <Route path='/foods/deserts' element={<Deserts />} />
        {/* drinks */}
        <Route path='/drinks' element={<Drinks />} />
      </Routes>
      <ScrollToTop />
      <QR />
    </>
  );
};

export default App;
