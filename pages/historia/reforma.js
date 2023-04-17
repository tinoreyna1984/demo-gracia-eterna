export default function Reforma() {
    return (
        <>
            <section className='flex flex-col gap-2 mt-24 px-6 py-8 lg:px-12 lg:py-0 lg:mt-36
                scroll-mt-[130px] lg:scroll-mt-[200px]
                md:grid md:grid-cols-2 md:gap-y-5'
            >
                <h2
                    className='text-[28px] md:text-[48px] lg:text-[52px] text-center md:text-start uppercase lg:text-left
                    md:col-span-2'
                >
                    La Reforma Protestante
                </h2>
                <p
                    className='md:text-[16px] lg:text-[24px]
                    md:col-span-2'
                >
                    Es el evento histórico que ha impactado profundamente al mundo, el cual parte de Europa Occidental y ha propiciado la difusión más amplia de la Biblia y ha acelerado el progreso social del viejo continente. Efectos que se mantienen al día de hoy a nivel mundial.
                </p>
                <p className='md:text-[16px] lg:text-[24px]'>
                    Sucede esto un 31 de octubre de 1517, en Wittenberg, Alemania. Martín Lutero (1483 - 1546), quien era -en ese entonces- un monje agustino, entendió el vacío de su vida que no podía ser cubierto por su vida monástica. Al entrar a la Universidad de Wittenberg para estudiar teología, encontró la clave en el estudio de la Carta a los Romanos, muy particularmente el verso 1:17, el cual dice: "Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá." Esto insertó un consuelo en el alma de este religioso y genera una nueva perspectiva que le llevaría al redescubrimiento de la Palabra de Dios en una Europa humanista temprana.
                </p>
                <img className='md:row-span-2 md:col-span-1 md:self-center'
                    src='../historia/reforma/martin-lutero.jpg' alt='lutero' title="Martín Lutero"
                />
                <p className='md:text-[16px] lg:text-[24px] md:col-span-2'>
                    Sin embargo, a pesar de que el deseo de este ex-monje ha sido el de restaurar la iglesia con su teología, le valió un enfrentamiento con el papa León X y su eventual excomunión, debido a la denuncia que Lutero hizo a través de sus "95 Tesis contra la venta de indulgencias", pues este emprendimiento católico romano era el punto cumbre de la corrupción institucional y moral de la iglesia. Una indulgencia era un documento eclesial por el cual el hombre tiene acceso directo al cielo sin pasar por el purgatorio, y el papa se valió de esto para procurar resolver la crisis financiera en Roma.
                </p>
                <p className='md:text-[16px] lg:text-[24px] md:col-span-2'>
                    En este punto, se generó un nuevo cisma en la iglesia, cuyo precedente más cercano fue en el año 1054, el "gran cisma de la iglesia". Lutero comenzó a diseminar sus trabajos en Alemania y estados directamente asociados al Sacro Imperio Germánico. Subsecuentemente, los príncipes europeos que decidieron aceptar la teología luterana y deslindarse del papa emitieron una protesta en la llamada Dieta de Spira (1529) ante el entonces emperador Carlos V. De ahí a los términos "protestantismo" y "protestante", entre otras variaciones.
                </p>
                <p className='md:text-[16px] lg:text-[24px] md:row-span-2 md:self-center lg:self-start'>
                    Este proceso involucró a otras personas prominentes del continente, entre ellas Juan Calvino (1509 - 1564), quien ha establecido el tratado teológico más grande del protestantismo: la "Institución de la Religión Cristiana". Es la base de la teología reformada y una obra emblemática cuyos preceptos puso en práctica en su ministerio en Ginebra, Suiza.
                </p>
                <img className='md:row-span-1 md:col-span-1 md:justify-self-center'
                    src='../historia/reforma/juan-calvino.jpg' alt='juan calvino' title="Juan Calvino"
                />
                <p className='md:text-[16px] lg:text-[24px] md:col-span-2'>
                    En resumen, fue en aquel periodo en el que los llamados reformadores fueron llamados por Dios para buscar el reencuentro con Dios a través de la Biblia, que trajo consigo nuevas perspectivas de vida cristiana, misión, teología, etcétera, para la gloria de Dios.
                </p>
                <h3
                    className='text-[20px] md:text-[40px] lg:text-[32px] text-center md:text-start uppercase lg:text-left
                    md:col-span-2 md:mt-6'
                >
                    La Reforma hoy
                </h3>
                <p className='md:text-[16px] lg:text-[24px] pb-10 md:col-span-2'>
                    El legado de la reforma continúa al día de hoy, pues a través de los tiempos la iglesia se renueva cada día según la Palabra de Dios. "Ecclesia reformata semper reformanda est" ("La iglesia reformada siempre está reformándose").
                </p>
            </section>
        </>
    );
}