import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import BackgroundEffects from "./layout/BackgroundEffects";
import CursorGlow from "./layout/CursorGlow";
import ScrollProgress from "./layout/ScrollProgress";
import FloatingContact from "./layout/FloatingContact";
import PageTransition from "./layout/PageTransition";

/* =====================================================
   PAGES
===================================================== */

import HomePage from "./pages/HomePage";

import AboutPage from "./pages/About/AboutPage";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ServicesPage from "./pages/Services/ServicesPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ContactPage from "./pages/Contact/ContactPage";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import TermsPage from "./pages/Terms/TermsPage";
import AdminPage from "./pages/Admin/AdminPage";
/* =====================================================
   404 PAGE
===================================================== */

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-violet-400 text-sm uppercase tracking-widest">
          404
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-5 text-muted max-w-lg mx-auto">
          The page you are looking for does not exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold"
        >
          Back to Home
        </a>

      </div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* PAGE CONTENT */}
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* HOME */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />

            {/* EXPERIENCE */}
            <Route
              path="/experience"
              element={
                <PageTransition>
                  <ExperiencePage />
                </PageTransition>
              }
            />

            {/* PROJECTS */}
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <ProjectsPage />
                </PageTransition>
              }
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              }
            />

            {/* SKILLS */}
            <Route
              path="/skills"
              element={
                <PageTransition>
                  <SkillsPage />
                </PageTransition>
              }
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPage />
                </PageTransition>
              }
            />
            <Route
              path="/terms"
              element={
                <PageTransition>
                  <TermsPage />
                </PageTransition>
              }
            />

            {/* ADMIN DASHBOARD */}
            <Route
              path="/admin"
              element={
                <PageTransition>
                  <AdminPage />
                </PageTransition>
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL BACKGROUND */}
      <BackgroundEffects />

      {/* GLOBAL CURSOR */}
      <CursorGlow />

      {/* SCROLL PROGRESS BAR */}
      <ScrollProgress />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT + ROUTES */}
      <AppRoutes />

      {/* FLOATING CONTACT WIDGET (WhatsApp / Email / Phone) */}
      <FloatingContact />

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;