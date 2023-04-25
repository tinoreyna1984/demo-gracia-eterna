import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Servicios() {
    return (
        <section className='flex flex-col items-center gap-2 mt-24 mb-10 px-6 py-8 lg:px-12 lg:py-0 lg:mt-36
                scroll-mt-[130px] lg:scroll-mt-[200px]'
        >
            <h2 className='text-[28px] md:text-[48px] lg:text-[52px] text-center uppercase'>
                Nuestros servicios y ministerios
            </h2>
            <div className="flex flex-col gap-6 items-center">
                <h3 className="text-[24px]">Servicios</h3>
                <div className="flex flex-wrap items-center gap-12 justify-center">
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/servicios/s-01.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Culto dominical (con escuela dominical)</h4>
                        <p>Domingos 10:30h en nuestro templo</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20culto%20dominical" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-4 py-2 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/servicios/s-02.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Culto juvenil</h4>
                        <p>Domingos 9:30-10:30h en nuestro templo</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20culto%20juvenil" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-4 py-2 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/servicios/s-03.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Tiempo deportivo varones</h4>
                        <p>Lunes 20-22h</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20tiempo%20deportivo%20varones" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-4 py-2 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/servicios/s-04.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Estudios bíblicos en hogares</h4>
                        <p>Miércoles y jueves 19:30h, consulta por ubicaciones</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20estudios%20en%20hogares" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-4 py-2 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/servicios/s-05.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Tiempo deportivo mujeres</h4>
                        <p>Lunes a viernes 7-8h, Parque Samanes</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20tiempo%20deportivo%20mujeres" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-4 py-2 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/servicios/s-00.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Discipulado</h4>
                        <p>Consultar los horarios</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20discipulado" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <h3 className="text-[24px] mt-6">Ministerios</h3>
                <div className="flex flex-wrap items-center gap-12 justify-center">
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-01.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Damas</h4>
                        <p>Sábados 9:30h, presencial o vía Zoom</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20ministerio%20de%20damas" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-02.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Jóvenes</h4>
                        <p>Sábados 17:00h, en nuestro templo</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20ministerio%20de%20jovenes" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-03.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Música</h4>
                        <p>Consultar al interno</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20participar%20en%20el%20ministerio%20de%20música" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-04.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Varones</h4>
                        <p>Consultar por próximas reuniones</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20ministerio%20de%20varones" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-05.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Parejas</h4>
                        <p>Consultar por próximas reuniones</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20ministerio%20de%20parejas" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-06.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Ministerio de Bolivia y la 18</h4>
                        <p>Consultar más de este ministerio</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20el%20ministerio%20de%20bolivia%20y%20la%20dieciocho" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-00.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Consejería</h4>
                        <p>Consultar para separar cita</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20solicitar%20una%20consejería%20pastoral" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-00.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Misericordia</h4>
                        <p>Consultar más detalles</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20detalles" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                    <div className="rounded bg-[#FFF5EB] px-2 py-3 flex flex-col gap-4 justify-around items-center min-h-[390px] max-w-[264px]
                    lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
                        <img className="rounded object-cover min-w-[232px] min-h-[186px] max-h-[186px]" src="/ministerios/m-00.jpg" alt="Servicio" />
                        <h4 className="text-center text-[20px]">Otras inquietudes</h4>
                        <p>Escríbenos</p>
                        <a className="text-white bg-[#25D366] px-4 py-2 rounded flex items-center"
                            href="https://wa.me/593983592958?text=Hola!%20Quisiera%20conocer%20más%20sobre%20las%20actividades%20de%20la%20iglesia" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="ml-2 text-lg">Conoce más</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}