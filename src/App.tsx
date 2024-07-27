import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Projects} from "./layout/section/projects/Projects";
import {About} from "./layout/section/about/About";
import {Footer} from "./layout/footer/Footer";
import {Contact} from "./layout/section/contact/Contact";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";

import {ThemeProvider} from "./components/providers/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header/>
                <Main/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
                <GoTopBtn/>
            </div>
        </ThemeProvider>

    );
}

export default App;
