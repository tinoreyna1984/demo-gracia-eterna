import Link from "next/link";

export default function Header() {

    const ul = (typeof window !== "undefined") && document.querySelector("ul");
    const check = (typeof window !== "undefined") && document.querySelector("#check");
    const icon = (typeof window !== "undefined") && document.querySelector("#icon");

    const showSidebar = () => {
        if (check.checked === false && ul.style.left === "-100%") {
            icon.innerHTML = "close";
            ul.style.left = 0;
            check.checked = true;
        }
        else {
            icon.innerHTML = "menu";
            ul.style.left = "";
            check.checked = false;
        }
        //console.log(check.checked, ul.style.left, icon.innerHTML)
    };

    const toggleMenu = () => {
        icon.innerHTML = (check.checked === true) ? "close" : "menu";
        //console.log(check.checked, ul.style.left, icon.innerHTML)
    }

    return (
        <header>
            <nav>
                <input onChange={toggleMenu} type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <span id="icon" className="material-symbols-outlined">menu</span>
                </label>
                <Link href={"/"} className="enlace">
                    <img src="ge-logo.jpg" alt="logo" className="logo" />
                </Link>
                <ul>
                    <li><Link onClick={showSidebar} href="/">Inicio</Link></li>
                    <li><Link onClick={showSidebar} href="#">Nuestra iglesia</Link></li>
                    <li><Link onClick={showSidebar} href="#">Ministerios</Link></li>
                    <li><Link onClick={showSidebar} href="#">Mensaje del pastor</Link></li>
                    <li><Link onClick={showSidebar} href="#">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}