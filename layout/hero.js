import Link from "next/link";

export default function Hero() {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1 className='text-[32px] md:text-[42px] lg:text-[64px]'>Iglesia Reformada Presbiteriana Gracia Eterna</h1>
                <h2 className='text-[16px] md:text-[24px] text-center'>Promoviendo el Evangelio en la fe Reformada Presbiteriana</h2>
                <Link href="/#resume" className="absolute mt-[420px]" scroll={false}>
                    <span className="material-symbols-outlined text-[42px]
                        motion-safe:animate-bounce"
                    >
                        expand_more
                    </span>
                </Link>
            </div>
        </section>
    );
}