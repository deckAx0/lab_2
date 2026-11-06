import { useEffect, useState } from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Edu from "./components/Education";
import Certs from "./components/Certs";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const DAY_START_HOUR = 7;
const NIGHT_START_HOUR = 21;

function getThemeByTime(date = new Date()) {
    const hours = date.getHours();
    return hours >= DAY_START_HOUR && hours < NIGHT_START_HOUR ? "light" : "dark";
}

function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        let autoTheme = getThemeByTime();
        setTheme(autoTheme);

        const timer = setInterval(() => {
            const next = getThemeByTime();
            if (next !== autoTheme) {
                autoTheme = next;
                setTheme(next);
            }
        }, 60_000);

        return () => clearInterval(timer);
    }, []);

    function toggleTheme() {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }

    return (
        <div className={`${theme} flex min-h-screen flex-col gap-4 bg-page px-4 py-4 font-sans leading-relaxed text-ink wrap-break-word sm:gap-6 sm:py-10 print:p-0`}>
            <Header theme={theme} onToggleTheme={toggleTheme} />

            <main className="mx-auto grid w-full max-w-[1100px] items-start gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[2fr_1fr] lg:grid-rows-[auto_auto_1fr]">
                <Description />
                <Skills />
                <Edu />
                <Certs />
                <Reviews />
            </main>

            <Footer />
            <ContactForm />
        </div>
    );
}
export default App;
