import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Events from '@/pages/Events';
import Store from '@/pages/Store';
import PlayArea from '@/pages/PlayArea';
import Pricing from '@/pages/Pricing';
import Reservations from '@/pages/Reservations';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/wydarzenia" element={<Events />} />
              <Route path="/sklep" element={<Store />} />
              <Route path="/strefa-gier" element={<PlayArea />} />
              <Route path="/cennik" element={<Pricing />} />
              <Route path="/rezerwacje" element={<Reservations />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
      </>
  )
}

export default App