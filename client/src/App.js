import React from "react";
import Home from "./pages/Home/Home";
import BannerCreator from "./pages/BannerCreator/BannerCreator";
import { Navigation, Footer } from "./components";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { ThemeProvider } from "styled-components";
import { TranslateProvider } from "./utils/contexts/translate/translateContext";
import { ProjectProvider } from "./utils/contexts/project/projectContext";
import {
  Routes,
  Route,
} from "react-router-dom";
import { UserProvider } from "./utils/contexts/user/userContext";
import { ModalProvider } from "./utils/contexts/modal/modalContext";
import Projects from "./pages/Projects";
import SingleProject from "./pages/Home/Projects/SingleProject";
import ToastNotification from "./components/ToastNotification";
import ProfileDash from "./pages/DashboardAdmin/Components/Profile/ProfileDash";
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

function App() {
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
                      <Route path="profile" element={<ProfileDash />} />
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
