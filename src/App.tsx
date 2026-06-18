import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';

import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import PageLoader from "@/pages/PageLoader";
const Home = lazy(() => import("@/pages/Home"));
const Events = lazy(() => import("@/pages/Events"));
const Store = lazy(() => import("@/pages/Store"));
const PlayArea = lazy(() => import("@/pages/PlayArea"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Reservations = lazy(() => import("@/pages/Reservations"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));

function App() {
  const isGitHubPages = window.location.hostname.includes("github.io");
  const basename = isGitHubPages ? "/HejMistrzu-Beta" : "/";
  return (
    <>
      <CartProvider>
        <Router basename={basename}>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
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
                <Route path="/profile/:username" element={<ProfilePage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
      </>
  )
}

export default App