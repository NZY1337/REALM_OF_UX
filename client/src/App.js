import React from "react";
import Home from "./pages/Home/Home";
import BannerCreator from "./pages/BannerCreator/BannerCreator";
import { Navigation, Footer } from "./components";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { ThemeProvider } from "styled-components";
import { TranslateProvider } from "./utils/contexts/translate/translateContext";
import { ProjectProvider } from "./utils/contexts/project/projectContext";
import { Routes, Route, matchPath, useLocation, Router } from "react-router-dom";
import { UserProvider } from "./utils/contexts/user/userContext";
import { ModalProvider } from "./utils/contexts/modal/modalContext";
import Projects from "./pages/Projects";
import SingleProject from "./pages/Home/Projects/SingleProject";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ToastNotification from "./components/ToastNotification";
import CommentDash from "./pages/DashboardAdmin/Components/CommentDash";
import ProjectsDash from "./pages/DashboardAdmin/Components/Projects/ProjectsDash";
import TestDash from "./pages/DashboardAdmin/Components/TestDash";
import CodeEditor from "./pages/CodeEditor/CodeEditor";
import About from "./pages/About/About";
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
  "dashboard/comments",
  "dashboard/tests",
  "code-editor",
  "about"
];

function App() {
//   const { pathname } = useLocation();

//   const hideHeaderFooter =
//     pathname === "/dashboard" ||
//     pathname === "/dashboard/comments" ||
//     pathname === "/dashboard/tests" || 
//     pathname === "/login";

//   const isUnknownRoot = !knownRoutes.some((route) =>
//     matchPath(`${route}`, pathname)
//   );

  return (
    <ThemeProvider theme={theme}>
      <TranslateProvider>
        <UserProvider>
          <ModalProvider>
            <ProjectProvider>
           
                <div className="App">
                    <Navigation />
                        <Routes>
                            <Route path="/">

                            <Route path="/dashboard">
                                <Route path="" element={<ProjectsDash />} />
                                <Route path="comments" element={<CommentDash />} />
                                <Route path="tests" element={<TestDash />} />
                            </Route>

                            <Route path="code-editor" element={<CodeEditor />} />
                            <Route path="" element={<Home />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="login" element={<LoginRegister />} />
                            <Route path="about" element={<About />} />
                            <Route path="banner-creator" element={<BannerCreator />} />

                            </Route>
                                <Route path="/projects">
                                <Route path=":projectId" element={<SingleProject />} />
                            </Route>

                            {/* {isUnknownRoot && (
                                <Route path="*" element={<ErrorPage />} />
                            )} */}
                        </Routes>
                    <Footer />
                    <ToastNotification />
                </div>
             
            </ProjectProvider>
          </ModalProvider>

         
        </UserProvider>
      </TranslateProvider>
    </ThemeProvider>
  );
}

export default App;
