import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';

import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import ProtectedRoute from "@/components/ProtectedRoute";

import { AuthProvider } from "@/context/AuthContext";

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
const HistoryPage = lazy(() => import("@/pages/HistoryPage"));

// Admin panel
const AdminLayout = lazy(() => import("@/admin/components/AdminLayout"));
const AdminDashboard = lazy(() => import("@/admin/pages/Dashboard"));
const AdminReservations = lazy(() => import("@/admin/pages/Reservations"));
const AdminUsers = lazy(() => import("@/admin/pages/Users"));
const AdminProducts = lazy(() => import("@/admin/pages/Products"));
const AdminEvents = lazy(() => import("@/admin/pages/Events"));

function App() {
  const isGitHubPages = window.location.hostname.includes("github.io");
  const basename = isGitHubPages ? "/HejMistrzu-Beta" : "/";
  return (
    <>
      <AuthProvider>
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

                  <Route path="/profil/:username" element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  } />
                  <Route path="/profil/:username/historia" element={
                    <ProtectedRoute>
                      <HistoryPage />
                    </ProtectedRoute>
                  } />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="rezerwacje" element={<AdminReservations />} />
                  <Route path="uzytkownicy" element={<AdminUsers />} />
                  <Route path="produkty" element={<AdminProducts />} />
                  <Route path="eventy" element={<AdminEvents />} />
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App