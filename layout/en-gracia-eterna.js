import Card from "@/components/card";

export default function EnGraciaEterna() {
    return (
        <section className='flex flex-col gap-2 mt-4 px-8 py-8 md:mt-6 lg:px-12 lg:py-12
            bg-[#F5F2F0]'
            id="resume"
        >
            <h2 className='text-[28px] md:text-[48px] text-center'>
                En Gracia Eterna...
            </h2>
            <div className="flex flex-col items-center gap-y-5 md:flex-row md:justify-center md:gap-x-5 lg:gap-x-12 md:flex-wrap">
                < Card pic={"ge-01"} message={"Nos apasionamos por las almas"} />
                < Card pic={"ge-02"} message={"Nos apasionamos por la Palabra de Dios"} />
                < Card pic={"ge-03"} message={"Vivimos una cultura de adoración a Nuestro Señor Jesucristo"} />
                <h3 className="text-center text-[22px] lg:text-[26px] p-3">En síntesis, creemos en el inmenso amor de Dios, el cual cambia corazones para Su gloria y para nuestro gozo en Él.</h3>
            </div>
        </section>
    );
}