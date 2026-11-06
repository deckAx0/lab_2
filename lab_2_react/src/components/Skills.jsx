import Card from "./Card";
 
const skills = [
    {
        label: "Programming/query languages:",
        items: "Python, CMD, SQL, GraphQL;",
    },
    {
        label: "Security Testing Tools:",
        items: "BurpSuite, nikto, sqlmap, nmap, ffuf, gobuster, metasploit, netexec, sliver, bloodhound;",
    },
    {
        label: "Penetration Testing Skills:",
        items: "PoC Development, Vulnerability reporting and documentation, API Testing, Business Logic Flaws Testing;",
    },
    {
        label: "Vulnerability Classes:",
        items: "SQL Injection, XSS, SSRF, XXE, IDOR, File Upload Vulnerabilities, CSRF, SSTI, Command Injection, JWT Vulnerabilities, LFI/RFI, CORS Misconfigurations, Web Cache Poisoning, Access Control Vulnerabilities, Authentication Vulnerabilities, Insecure Deserialization, GraphQL API flaws;",
    },
    {
        label: "Web Technologies:",
        items: "GraphQL, REST API, JWT, CDNs, CORS, HTTP/HTTPS, WebSockets, Web Cache;",
    },
];
 
function Skills() {
    return (
        <Card title="Skills" className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <ul className="divide-y divide-line">
                {skills.map((skill) => (
                    <li
                        key={skill.label}
                        className="grid gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[12rem_1fr]"
                    >
                        <b className="font-semibold">{skill.label}</b>
                        <span className="text-ink-soft">{skill.items}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}
export default Skills;