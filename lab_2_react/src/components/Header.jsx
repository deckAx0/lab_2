import TextLink from "./TextLink";
import ThemeToggle from "./ThemeToggle";
 
function Header({ theme, onToggleTheme }) {
    return (
        <header className="mx-auto flex w-full max-w-[1100px] flex-col items-start gap-x-8 gap-y-5 rounded-xl border border-l-4 border-line border-l-accent bg-surface p-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:p-8">
            <h1 className="font-mono text-[clamp(1.6rem,1.1rem_+_2vw,2.4rem)] leading-tight font-bold tracking-tight">
                Illia Shevtsov
                <span className="mt-1.5 block text-[0.55em] font-medium text-accent">
                    Junior Penetration Tester
                </span>
            </h1>
 
            <div>
                <h2 className="mb-2 text-xs font-semibold tracking-widest text-muted uppercase">
                    Contacts
                </h2>
 
                <address className="flex flex-col gap-1.5 not-italic">
                    <span>
                        <strong>📞:</strong> <TextLink href="tel:+38067676767" mono>+38067676767</TextLink>
                    </span>
                    <span>
                        <strong>📧:</strong> <TextLink href="mailto:randomemail@me.local" mono>randomemail@me.local</TextLink>
                    </span>
                </address>
            </div>

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </header>
    );
}
export default Header;