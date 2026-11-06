function Card({ title, className = "", children }) {
    return (
        <section
            className={`rounded-xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-accent/45 sm:p-6 print:break-inside-avoid ${className}`}
        >
            <h2 className="mb-4 border-b border-dashed border-line pb-2 font-mono text-lg leading-tight font-bold text-accent">
                <span className="text-muted"># </span>
                {title}
            </h2>
 
            {children}
        </section>
    );
}
export default Card;