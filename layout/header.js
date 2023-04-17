import Link from "next/link";

export default function Header() {


    const mainmenu = (typeof window !== "undefined") && document.querySelector(".menu");
    const check = (typeof window !== "undefined") && document.querySelector("#check");
    const icon = (typeof window !== "undefined") && document.querySelector("#icon");

    const hideSidebar = () => {
        if (check.checked === false && mainmenu.style.left === "-100%") {
            icon.innerHTML = "close";
            mainmenu.style.left = 0;
            check.checked = true;
        }
        else {
            icon.innerHTML = "menu";
            mainmenu.style.left = "";
            check.checked = false;
        }
    };

    const toggleMenu = () => {
        icon.innerHTML = (check.checked === true) ? "close" : "menu";
    }

    return (
        <header>
            <nav>
                <input onChange={toggleMenu} type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <span id="icon" className="material-symbols-outlined">menu</span>
                </label>
                <Link href={"/"} className="enlace">
                    <img src="../ge-logo.jpg" alt="logo" className="logo" />
                </Link>
                <ul className="menu">
                    <li><Link onClick={hideSidebar} href="/">Inicio</Link></li>
                    <li>
                        <Link href="#">
                            Nuestra iglesia
                        </Link>
                        <ul className="sub-menu">
                            <li><Link onClick={hideSidebar} href="/historia/nuestra-historia">Nuestra historia</Link></li>
                            <li><Link onClick={hideSidebar} href="/historia/reforma">La Reforma Protestante</Link></li>
                            <li><Link onClick={hideSidebar} href="/historia/iglesia">Iglesia Presbiteriana</Link></li>
                            <li><Link onClick={hideSidebar} href="/historia/nuestra-fe">Nuestra fe</Link></li>
                        </ul>
                    </li>
                    <li><Link onClick={hideSidebar} href="#">Ministerios</Link></li>
                    <li><Link onClick={hideSidebar} href="#">Servicios</Link></li>
                    <li><Link onClick={hideSidebar} href="#">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}