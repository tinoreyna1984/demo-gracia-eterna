import Link from "next/link";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:grid lg:grid-cols-3 px-6 pt-8 pb-10 lg:p-12 gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="text-[24px] uppercase">Iglesia Gracia Eterna</h3>
                <p>Av. José Vicente Trujillo Gutiérrez 505, Guayaquil</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.1759397321303!2d-79.89691627400121!3d-2.223241103177759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6fcb5c315d87%3A0x521e6f99ec3e0c3!2sIglesia%20Gracia%20Eterna-Fundaci%C3%B3n%20Esteban!5e0!3m2!1ses-419!2sec!4v1681173023773!5m2!1ses-419!2sec"
                    width="250" height="280" style={{ border: "0", borderRadius: "12px" }} allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="flex flex-col gap-4 lg:self-stretch">
                <h3 className="text-[24px] uppercase">Menú del sitio</h3>
                <Link href={'/'}>Inicio</Link>
                <Link href={'#'}>Nuestra iglesia</Link>
                <Link href={'#'}>Ministerios</Link>
                <Link href={'#'}>Mensaje del pastor</Link>
                <Link href={'#'}>Contacto</Link>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-[24px] uppercase">Contacto</h3>
                <p>Fono: +593 98 194 6246</p>
                <p>Correo: iglesiareformadage@gmail.com</p>
                <h3 className="text-[24px] uppercase mt-6">Redes</h3>
                <div className="flex flex-row gap-6 items-center">
                    <a href="https://www.facebook.com/profile.php?id=100066908379755" target={'_blank'}>
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/iglesiagraciaeterna/" target={'_blank'}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>

            </div>
        </footer>
    );
}