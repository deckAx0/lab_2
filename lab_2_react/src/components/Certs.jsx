import Card from "./Card";
import TextLink from "./TextLink";
 
function Certs() {
    return (
        <Card title="Certifications">
            <article>
                <h3 className="mb-1 font-mono text-base leading-tight font-bold">CWES</h3>
                <p className="text-ink-soft">
                    <TextLink
                        href="https://profile.hackthebox.com/profile/019e4112-2458-708c-93d1-63cce29d3bec/certificate/HTBCERT-66E72E89B9?utm_medium=copy_url"
                        external
                    >
                        Certified Web Exploitation Specialist
                    </TextLink>{" "}
                    — Hack The Box
                </p>
            </article>
 
            <article className="mt-4 border-t border-line pt-4">
                <h3 className="mb-1 font-mono text-base leading-tight font-bold">eJPTv2</h3>
                <p className="text-ink-soft">
                    <TextLink
                        href="https://certs.ine.com/84bdec48-b649-4c9a-936f-7256cdb32922#acc.1pLPsoAf"
                        external
                    >
                        eLearn Junior Penetration Tester
                    </TextLink>{" "}
                    — INE
                </p>
            </article>
        </Card>
    );
}
export default Certs;