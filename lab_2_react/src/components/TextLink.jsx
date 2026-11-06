function TextLink({ href, external = false, mono = false, children }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`text-link underline decoration-transparent underline-offset-3 transition-colors duration-200 hover:text-accent hover:decoration-current focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent ${mono ? "font-mono text-sm" : ""}`}
        >
            {children}
            {external && (
                <span aria-hidden="true" className="text-[0.85em] print:hidden">
                    &nbsp;↗
                </span>
            )}
        </a>
    );
}
export default TextLink;