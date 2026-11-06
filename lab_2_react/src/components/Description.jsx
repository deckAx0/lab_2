import Card from "./Card";
 
function Description() {
    return (
        <Card title="About Me" className="sm:col-span-2">
            <p className="max-w-[75ch] text-ink-soft">
                Junior Penetration Tester specializing in Web Application and API Security.
                Experienced in manual vulnerability discovery, exploitation and security assessment
                using Burp Suite and other industry-standard tools. Active CTF player with experience
                solving Web Security challenges and competing in team-based CTF competitions.
                Strong understanding of OWASP Top 10, HTTP, networking and Linux. eJPTv2 and
                CWES certified.
            </p>
        </Card>
    );
}
export default Description;