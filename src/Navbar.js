import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
    let [stuck, setStuck] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let headerHeight = document.getElementById("header").offsetHeight;
            setStuck(window.scrollY >= headerHeight);
        });
    })

    return (
    <div id="nav" className={stuck ? "stuck" : ""}>
        <div class="link-wrapper">Info</div>
    </div>
    );
}