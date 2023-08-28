export default function AboutMe({verticalMode}) {
    return (
        <section id="about-me">        
            <div className={`center-wrapper ${verticalMode ? "" : "thin"}`}>
                <p>I am a software engineer. I use JavaScript (including React, which I used to make this page), Java, C, C#, HTML, CSS, and Lua.
                    I will eventually put more information here, but for now, you can explore the rest of the page.
                </p>
            </div>
        </section>
    );
}