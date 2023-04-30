function Dropdown(props) {
  return (
    <div
      id="dropdown"
      className="absolute divide-y top-14 flex flex-col place items-start -translate-x-[16.5rem] divide-gray-300 rounded-lg shadow w-44 bg-white"
    >
      {props.list.map((item, i) => (
        <div
          key={i}
          className="flex w-full justify-between p-2 hover:bg-slate-300 cursor-pointer border-l-transparent hover:border-l-blue-600 hover:border-l-4"
        >
          <h3 className="text-sm font-medium text-black">{item}</h3>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
