export default function Resume() {
    return (
        <section className='flex flex-col gap-2 mt-4 px-6 py-8 lg:px-12 lg:py-0 lg:mt-24
            md:grid md:grid-cols-2
            lg:grid-cols-2 lg:grid-rows-[100px_auto_auto] xl:grid-rows-3 lg:items-center scroll-mt-[130px] lg:scroll-mt-[200px]'
            id="resume"
        >
            <h2 className='text-[28px] md:text-[48px] lg:text-[52px] text-center md:text-start uppercase lg:text-left'>
                Nuestra iglesia
            </h2>
            <img className='md:row-span-2 md:col-span-1 lg:self-start md:mt-10'
                src='monumento-reforma.jpg' alt='movimiento-reforma'
            />
            <p className='md:text-[16px] lg:text-[24px] lg:self-start'>Somos una iglesia evangélica, dado que creemos en el poder de Evangelio para salvación (Romanos 1:16). Somos, asimismo, una iglesia reformada, pues promovemos y seguimos el legado de la Reforma Protestante, en teología y práctica para alcanzar al Ecuador con la predicación del Evangelio.</p>
            <p className='md:text-[16px] lg:text-[24px] lg:self-start'>Sola fide. Sola Scriptura. Solus Christus. Sola gratia. Soli Deo Gloria.</p>
        </section>
    );
}