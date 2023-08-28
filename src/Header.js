export default function Header() {
    return (
        <section id="header">
            <div id="name-wrapper">John Collins</div>
            <div id="socials-wrapper">
            <div className="socials-buffer" />
            <div className="link-wrapper">
                <a href="https://github.com/JohnGJCollins"><img src="/icons8-github-64.png" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/john-collins-004531253/"><img src="/icons8-linkedin-50.png" alt="LinkedIn"/></a>
            </div>
            <div className="socials-buffer" />
            </div>
        </section>
    );
}