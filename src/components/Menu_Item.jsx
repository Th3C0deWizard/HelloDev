import Icon from "./Icon";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <div className="grid place-items-center mt-4">
      <Icon path={props.path} w={24} h={24} color="[#0069a3]" />
      <h2 className="text-3xl font-bold text-[#0069a3]">{props.tittle}</h2>
      <p className="text-black text-center text-xl">{props.description}</p>
      <Link
        to={props.href}
        className="mt-2 bg-[#F4D73B] text-[#0069a3] text-lg font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 hover:bg-amber-400 hover:scale-110 transition"
      >
        Go ahead
      </Link>
    </div>
  );
}

export default MenuItem;
