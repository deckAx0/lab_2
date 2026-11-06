const segment = "rounded-full px-3 py-0.5 transition-colors duration-200";
const active = "bg-accent text-page";
const inactive = "text-muted";

function ThemeToggle({ theme, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            title="Switch day / night theme"
            aria-label={theme === "light" ? "Switch to night theme" : "Switch to day theme"}
            className="inline-grid cursor-pointer grid-cols-2 rounded-full border border-line bg-page p-[3px] font-mono text-xs transition-colors duration-200 hover:border-accent focus-visible:border-accent focus-visible:outline-none print:hidden"
        >
            <span className={`${segment} ${theme === "light" ? active : inactive}`}>☀ day</span>
            <span className={`${segment} ${theme === "dark" ? active : inactive}`}>☾ night</span>
        </button>
    );
}
export default ThemeToggle;
