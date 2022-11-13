import React from "react";
import Home from "./pages/Home/Home";
import BannerCreator from "./pages/BannerCreator/BannerCreator";
import { Navigation, Footer, ModalAlert } from "./components";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { ThemeProvider } from "styled-components";
import { TranslateProvider } from "./utils/contexts/translate/translateContext";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import { UserProvider } from "./utils/contexts/user/userContext";
import { ErrorProvider } from "./utils/contexts/error/errorContext";
import Projects from "./pages/Projects";
import ProjectForm from "./pages/Projects/ProjectForm";
import SingleProject from "./pages/Home/Projects/SingleProject";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ToastNotification from "./components/ToastNotification";
import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";
import "./assets/scss/errorContext.scss";
import "./assets/scss/modalError.scss";

const theme = {
  mobile: "(min-width: 320px) and (max-width:479px)",
};

//https://9elements.github.io/fancy-border-radius/
const knownRoutes = [
  "login",
  "banner-creator",
  "/",
  "projects/:id",
  "dashboard",
];
function App() {
  const location = useLocation();

  const isUnknownRoot = !knownRoutes.some((route) =>
    matchPath(`${route}`, location.pathname)
  );

  return (
    <ThemeProvider theme={theme}>
      <TranslateProvider>
        <UserProvider>
          <ErrorProvider>
            {!isUnknownRoot && (
              <div className="App">
                <Navigation />

                <Routes>
                  <Route path="/">
                    <Route path="dashboard" element={<DashboardAdmin />} />
                    <Route path="" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="login" element={<LoginRegister />} />
                    <Route path="banner-creator" element={<BannerCreator />} />
                  </Route>
                  <Route path="/projects">
                    <Route path="new-project" element={<ProjectForm />} />
                    <Route path=":projectId" element={<SingleProject />} />
                  </Route>
                </Routes>
                <Footer />
                <ToastNotification />
                <ModalAlert />
              </div>
            )}
          </ErrorProvider>

          {isUnknownRoot && (
            <Routes>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          )}
        </UserProvider>
      </TranslateProvider>
    </ThemeProvider>
  );
}

export default App;
