import Card from "./Card";
 
function Edu() {
    return (
        <Card title="Education">
            <article>
                <h3 className="mb-1 font-mono text-base leading-tight font-bold">
                    National University "Lviv Polytechnic"
                </h3>
 
                <p className="text-ink-soft">
                    Cybersecurity
                </p>
 
                <p className="mt-2 text-sm text-ink-soft">
                    <time dateTime="2025" className="font-mono text-accent">2025</time> – Present
                </p>
            </article>
        </Card>
    );
}
export default Edu;