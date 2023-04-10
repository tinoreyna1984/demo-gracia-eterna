import Link from "next/link";

export default function Header() {
    const handleClickMobile = () => {
        if (!window.matchMedia("(max-width: 767px)").matches)
            return;
        const ul = document.querySelector("ul");
        ul.style.left = (ul.style.left === "-100%") ? 0 : "-100%"; // aquí hace el desplazamiento
    }

    return (
        <header>
            <nav>
                <input type="checkbox" id="check" onClick={handleClickMobile} />
                <label htmlFor="check" className="checkbtn">
                    <span className="material-symbols-outlined">menu</span>
                </label>
                <Link onClick={handleClickMobile} href={"/"} className="enlace">
                    <img src="ge-logo.jpg" alt="logo" className="logo" />
                </Link>
                <ul>
                    <li><Link onClick={handleClickMobile} href="/">Inicio</Link></li>
                    <li><Link onClick={handleClickMobile} href="#">Nuestra iglesia</Link></li>
                    <li><Link onClick={handleClickMobile} href="#">Ministerios</Link></li>
                    <li><Link onClick={handleClickMobile} href="#">Mensaje del pastor</Link></li>
                    <li><Link onClick={handleClickMobile} href="#">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}