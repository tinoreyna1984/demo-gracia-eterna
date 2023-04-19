export default function Card({pic, message}) {
    return (
        <div className="bg-white rounded p-3 min-w-[150px] md:max-w-[305px] h-[415px] flex flex-col
            lg:transition-all lg:duration-500 lg:delay-150 lg:ease-in-out lg:hover:scale-110">
            <img className="object-cover rounded min-w-[150px] md:max-w-[280px] h-[268px]" src={`./${pic}.jpg`} alt={`${pic}`} />
            <h3 className="text-center text-[22px] p-3">{message}</h3>
        </div>
    );
}