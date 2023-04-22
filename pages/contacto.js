import { useForm } from "@/hooks/useForm";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default function Contacto() {

    const form = useRef();

    const [option, setOption] = useState("Integrarme a un ministerio de crecimiento");
    const [deshabilitar, setDeshabilitar] = useState(false);
    const { values, nombre, email, mensaje, handleInputChange, reset } = useForm({ nombre: "", email: "", mensaje: "" })

    useEffect(() => {
        setOption("Deseo integrarme a un ministerio de crecimiento");
    }, []);

    const handleRadio = (e) => {
        const { value } = e.target;
        //console.log(value);
        setOption(value);
    };

    const validForm = (values) => {
        const { nombre, email, mensaje } = values;
        /* let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g; */
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (nombre.length < 2) {
            Swal.fire("Iglesia Gracia Eterna", "Debes ingresar tu nombre", "error");
            return false;
        }
        if (!emailRegex.test(email) || email.length === 0) {
            Swal.fire("Iglesia Gracia Eterna", "Por favor, ingresa un email válido", "error");
            return false;
        }
        if (!mensaje.length) {
            Swal.fire("Iglesia Gracia Eterna", "Debes escribir un mensaje", "error");
            return false;
        }
        return true;
    };

    const handleReset = () => {
        reset();
        setOption("Deseo integrarme a un ministerio de crecimiento");
    }

    const sendEmail = () => {
        if (!validForm(values)) return;
        const { nombre, email, mensaje } = values;
        let emailValues = { nombre, email, option, mensaje }
        console.log(form.current)
        console.log(emailValues);
        setDeshabilitar(true);
        emailjs.sendForm('service_bszeusl', 'template_lg7zuwo', form.current, 'rHKldPCYgVa-d62MS')
            .then((result) => {
                console.log(result.text);
                Swal.fire("Iglesia Gracia Eterna", "Tu mensaje fue enviado con éxito.", "success");
                setDeshabilitar(false);
            }, (error) => {
                console.log(error.text);
                Swal.fire("Iglesia Gracia Eterna", "Tu mensaje no pudo ser enviado: " + error.text + ". Habla con el administrador.", "error");
                setDeshabilitar(false);
            });
        handleReset();
    };

    return (
        <section className='flex flex-col items-center gap-2 mt-24 mb-10 px-6 py-8 lg:px-12 lg:py-0 lg:mt-36
                scroll-mt-[130px] lg:scroll-mt-[200px]'
        >
            <h2 className='text-[28px] md:text-[48px] lg:text-[52px] text-center uppercase'>
                Contacto
            </h2>
            <form ref={form} className="bg-[#FFF5EB] rounded px-6 py-3 w-full md:w-[80%] lg:w-[60%]">
                <div className='flex flex-col gap-4'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input disabled={deshabilitar} onChange={handleInputChange} className="border rounded p-2" type="text" placeholder="Ingresa tu nombre" name="nombre" value={nombre} required />
                    <label htmlFor="email">Email:</label>
                    <input disabled={deshabilitar} onChange={handleInputChange} className="border rounded p-2" type="email" placeholder="Ingresa tu email" name="email" value={email} required />
                    <div className="flex flex-col gap-2">
                        <p>
                            Escoja lo que desee comunicarnos:
                        </p>
                        <div className="flex items-baseline gap-x-2">
                            <input
                                type="radio"
                                name="selectedOption"
                                id="opt01"
                                value="Deseo integrarme a un ministerio de crecimiento"
                                checked={option === "Deseo integrarme a un ministerio de crecimiento"}
                                onChange={handleRadio}
                                disabled={deshabilitar}
                            />
                            <label className="form-check-label" htmlFor="opt01">
                                Deseo integrarme a un ministerio de crecimiento
                            </label>
                        </div>
                        <div className="flex items-baseline gap-x-2">
                            <input
                                type="radio"
                                name="selectedOption"
                                id="opt02"
                                value="Deseo compartir un motivo de oración"
                                checked={option === "Deseo compartir un motivo de oración"}
                                onChange={handleRadio}
                                disabled={deshabilitar}
                            />
                            <label className="form-check-label" htmlFor="opt02">
                                Deseo compartir un motivo de oración
                            </label>
                        </div>
                        <div className="flex items-baseline gap-x-2">
                            <input
                                type="radio"
                                name="selectedOption"
                                id="opt03"
                                value="Deseo tener una consejería pastoral"
                                checked={option === "Deseo tener una consejería pastoral"}
                                onChange={handleRadio}
                                disabled={deshabilitar}
                            />
                            <label className="form-check-label" htmlFor="opt03">
                                Deseo tener una consejería pastoral
                            </label>
                        </div>
                        <div className="flex items-baseline gap-x-2">
                            <input
                                type="radio"
                                name="selectedOption"
                                id="opt04"
                                value="Deseo contactarme con ustedes por otros motivos"
                                checked={option === "Deseo contactarme con ustedes por otros motivos"}
                                onChange={handleRadio}
                                disabled={deshabilitar}
                            />
                            <label className="form-check-label" htmlFor="opt04">
                                Deseo contactarme con ustedes por otros motivos
                            </label>
                        </div>
                    </div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea disabled={deshabilitar} onChange={handleInputChange} id="mensaje" className="rounded border p-2" placeholder="Ingresa tu mensaje" name="mensaje" value={mensaje} rows={10} required></textarea>
                </div>
                <button disabled={deshabilitar} type="button" onClick={sendEmail} className="bg-[#FFD2A4] text-black shadow rounded px-5 py-2 mt-4 hover:bg-[#F2C79B]
                            hover:transition-colors hover:delay-300 hover:duration-500 hover:ease-in-out" >
                    Enviar
                </button>
            </form>
        </section>
    );
}