export default function Iglesia() {
    return (
        <>
            <section className='flex flex-col gap-2 mt-24 px-6 py-8 lg:px-12 lg:mt-36 lg:mb-10
                scroll-mt-[130px] lg:scroll-mt-[200px]
                md:grid md:grid-cols-2 md:gap-y-5 md:py-8 lg:py-10'
            >
                <h2
                    className='text-[28px] md:text-[48px] lg:text-[52px] text-center md:text-start uppercase lg:text-left
                    md:col-span-2'
                >
                    Iglesia Presbiteriana
                </h2>
                <img className='md:col-span-1 md:row-span-1 lg:justify-self-center'
                    src='../historia/reforma/juan-calvino.jpg' alt='juan calvino' title="Juan Calvino"
                />
                <p className='md:text-[16px] lg:text-[24px] lg:self-start'>
                    El presbiterianismo (del griego <span className="italic">presbyteros</span>, "anciano") es, sencillamente, la forma de gobierno de esta denominación protestante que resulta de la teología y práctica del reformador Juan Calvino (1509 - 1564). Quien heredó esta práctica gubernamental en la iglesia fue un clérigo escocés llamado John Knox (1514-1572), habiendo visitado Ginebra en pleno esplendor de la Reforma Protestante. Asentado allí, aprendió la teología del reformador francés y, subsecuentemente, regresó a Escocia en 1555 para difundir la teología calvinista.
                </p>
                <img className='md:col-span-1 md:row-span-2 lg:justify-self-center'
                    src='../historia/reforma/john-knox.jpg' alt='john knox' title="John Knox"
                />
                <p className='md:text-[16px] lg:text-[24px] lg:self-start'>
                    La influencia de Knox en el Parlamento Escocés fue tanta que hizo que el Reino de Escocia adoptara como suya la fe reformada, siendo en 1560 presentada la Confesión Escocesa, la cual se perpetuó hasta 1643, donde fue reemplazada por la Confesión de fe de Westminster, de origen puritano.
                </p>
                <p className='md:text-[16px] lg:text-[24px] lg:self-start md:-col-span-1'>
                    Eventualmente, la iglesia presbiteriana fue extendiéndose en esa nación y, posteriormente, se lanzó al campo misionero, siendo los primeros destinos las colonias inglesas en África, Australia, Nueva Zelanda, Estados Unidos y Canadá, para después extenderse a otras partes del mundo.
                </p>
            </section>
        </>
    );
}