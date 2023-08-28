import { useState } from "react";
import { useEffect } from "react";

export default function Navbar({curState, verticalMode}) {
    let [stuck, setStuck] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let headerHeight = document.getElementById("header").offsetHeight;
            setStuck(window.scrollY >= headerHeight);
        });
    })

    return (
        <>
        <div id="nav" className={stuck ? "separator stuck" : "separator"}>
            <div id="nav-buffer" className={verticalMode ? "disabled" : ""}></div>
            <div id="link-table" className={verticalMode ? "vertical" : ""}>
                <div className="link-wrapper"><a href="#header">About Me</a></div>
                <div className="link-wrapper"><a href="#project-list">Project List</a></div>
                <div className="link-wrapper"><a href="#project-info">Project Info</a></div>
                <div className="link-wrapper"><a href="#credits">Credits</a></div>
            </div>
        </div>
        <div className={stuck ? "separator" : "disabled"}></div> {/* This needs to be here to fill in the nav's original place when its position is locked to the top */}
        </>
    );
}