import { useEffect, useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xvkkdopq";
const OPEN_DELAY_MS = 60_000;
const DISMISSED_KEY = "contactFormDismissed";

const field = "mt-1 block w-full rounded-lg border border-line bg-page px-3 py-2 text-ink focus:border-accent focus:outline-none";
const button = "cursor-pointer rounded-lg border border-accent px-5 py-2 font-semibold disabled:cursor-wait disabled:opacity-60";

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        if (sessionStorage.getItem(DISMISSED_KEY)) return;

        const timer = setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    function close() {
        setIsOpen(false);
        sessionStorage.setItem(DISMISSED_KEY, "1");
    }

    useEffect(() => {
        if (!isOpen) return;

        function onKeyDown(event) {
            if (event.key === "Escape") close();
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("sending");

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            form.reset();
            setStatus("sent");
            sessionStorage.setItem(DISMISSED_KEY, "1");
        } catch (error) {
            console.error("Error sending form:", error);
            setStatus("error");
        }
    }

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
                    onClick={(event) => event.target === event.currentTarget && close()}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-title"
                        className="w-full max-w-[420px] rounded-xl border border-l-4 border-line border-l-accent bg-surface p-6 text-ink"
                    >
                        <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <h2 id="contact-title" className="font-mono text-lg font-bold text-accent">Contact me</h2>

                            <label>
                                Name
                                <input type="text" name="name" autoComplete="name" required className={field} />
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" autoComplete="email" required className={field} />
                            </label>
                            <label>
                                Phone
                                <input
                                    type="tel"
                                    name="phone"
                                    autoComplete="tel"
                                    placeholder="+380XXXXXXXXX"
                                    pattern="\+?[0-9\s\-\(\)]{7,20}"
                                    required
                                    className={field}
                                />
                            </label>
                            <label>
                                Message
                                <textarea name="message" rows={4} required className={`${field} resize-y`} />
                            </label>

                            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

                            {status === "sent" && <p className="text-sm text-accent">Thanks! Your message has been sent.</p>}
                            {status === "error" && <p className="text-sm text-red-500">Something went wrong, please try again.</p>}

                            <div className="flex justify-end gap-2">
                                <button type="submit" disabled={status === "sending"} className={`${button} bg-accent text-page`}>
                                    {status === "sending" ? "Sending…" : "Send"}
                                </button>
                                <button type="button" onClick={close} className={`${button} bg-transparent text-ink`}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
export default ContactForm;
