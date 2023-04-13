import Link from "next/link";

export default function Header() {


    const mainmenu = (typeof window !== "undefined") && document.querySelector(".menu");
    const check = (typeof window !== "undefined") && document.querySelector("#check");
    const icon = (typeof window !== "undefined") && document.querySelector("#icon");
    const subMenu = (typeof window !== "undefined") && document.querySelector(".sub-menu");

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
        //console.log(check.checked, mainmenu.style.left, icon.innerHTML)
    };

    const toggleMenu = () => {
        icon.innerHTML = (check.checked === true) ? "close" : "menu";
        //console.log(check.checked, mainmenu.style.left, icon.innerHTML)
    }

    const toggleSubMenu = () => {
        if(!window.matchMedia("(max-width: 767px)").matches) return;
        subMenu.style.left = (subMenu.style.left === "-100%" || subMenu.style.left === "") ? "0" : "-100%";
    }

    const clickSubMenuItem = () => {
        if(!window.matchMedia("(max-width: 767px)").matches) return;
        subMenu.style.removeProperty("left");
        hideSidebar();
    }

    const subMenuFocusLost = () => {
        if(!window.matchMedia("(max-width: 767px)").matches) return;
        const checkFocus = document.activeElement === subMenu;
        if(!checkFocus) subMenu.style.removeProperty("left");
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
                        <Link onClick={toggleSubMenu} href="#">Nuestra iglesia (+)</Link>
                        <ul onClick={subMenuFocusLost} className="sub-menu">
                            <li><Link onClick={clickSubMenuItem} href="/historia/nuestra-historia">Nuestra historia</Link></li>
                            <li><Link onClick={clickSubMenuItem} href="/historia/reforma">La Reforma Protestante</Link></li>
                            <li><Link onClick={clickSubMenuItem} href="/historia/iglesia">Iglesia Presbiteriana</Link></li>
                            <li><Link onClick={clickSubMenuItem} href="/historia/nuestra-fe">Nuestra fe</Link></li>
                            <li className="md:hidden"><span className="material-symbols-outlined cursor-pointer">close</span></li>
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