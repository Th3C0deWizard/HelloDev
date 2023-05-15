
function InfoCard(props){
    return(
        <div className="mx-24 my-4 grid grid-cols-5 p-3 bg-white overflow-hidden rounded-xl shadow-xl hover:shadow-xl">
            <div className="col-span-2 flex items-end overflow-hidden rounded-xl">
                <img src={props.cover} alt={props.title} />
            </div>
            <div className="col-span-3 flex flex-col p-4 h-full">
                <h2 className="justify-self-start text-2xl font-bold">{props.title}</h2>
                <textarea disabled className="py-4 text-lg h-full resize-none outline-none">{props.synopsis}</textarea>
                <div className="flex justify-between mt-4">
                  <p className="text-sm font-bold text-[#0069a3]">{props.author}</p>
                  <p className="text-xs font-bold text-[#0069a3]">{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;