function Icon(props) {
  return (
    <svg
      className={"w-" + props.w + " h-" + props.h + " text-" + props.color}
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d={props.path}
      ></path>
    </svg>
  );
}

export default Icon;
