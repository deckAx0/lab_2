import { Fragment, useEffect, useState } from "react";

const STORAGE_KEY = "systemInfo";

function Footer() {
    const [systemInfo, setSystemInfo] = useState(null);

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform || "n/a",
            language: navigator.language,
            screen: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(info));

        setSystemInfo(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    }, []);

    return (
        <footer className="mx-auto mt-auto w-full max-w-[1100px] border-t border-line pt-4 text-center text-sm text-muted">
            <h2 className="mb-2 text-xs font-semibold tracking-widest uppercase">
                Client info · localStorage
            </h2>

            {systemInfo && (
                <dl className="inline-grid max-w-full grid-cols-[max-content_minmax(0,1fr)] gap-x-4 gap-y-0.5 text-left font-mono text-xs">
                    {Object.entries(systemInfo).map(([key, value]) => (
                        <Fragment key={key}>
                            <dt className="text-accent">{key}</dt>
                            <dd className="text-ink-soft">{value}</dd>
                        </Fragment>
                    ))}
                </dl>
            )}
        </footer>
    );
}
export default Footer;
