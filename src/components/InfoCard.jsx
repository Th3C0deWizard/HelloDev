
function InfoCard(props){
    return(
        <div className="p-3 bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl ">
            
            <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src={props.cover} alt={props.title} />
            </div>
            <div className="p-2">
                <h2 className="text-[#0069a3] text-lg font-bold">{props.author}</h2>
                <p className=" text-sm text-slate-400">{props.synopsis}</p>
                <div className="mt-1 flex items-end justify-between">
                <p className="text-lg font-bold text-amber-500">{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;