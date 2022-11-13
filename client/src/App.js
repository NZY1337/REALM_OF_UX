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
import CommentDash from "./pages/DashboardAdmin/Components/CommentDash";
import ProjectsDash from "./pages/DashboardAdmin/Components/ProjectsDash";
import "./assets/scss/errorContext.scss";
import "./assets/scss/modalError.scss";
import TestDash from "./pages/DashboardAdmin/Components/TestDash";

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
  "dashboard/projects",
  "dashboard/tests",
];
function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  const hideHeaderFooter =
    pathname === "/dashboard" ||
    pathname === "/dashboard/projects" ||
    pathname === "/dashboard/tests";

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
                {!hideHeaderFooter && <Navigation />}

                <Routes>
                  <Route path="/dashboard/projects" element={<CommentDash />} />

                  <Route path="/">
                    <Route path="/dashboard" element={<ProjectsDash />}>
                      <Route path="projects" element={<CommentDash />} />
                      <Route path="tests" element={<TestDash />} />
                    </Route>
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
                {!hideHeaderFooter && <Footer />}
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
