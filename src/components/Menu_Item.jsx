function MenuItem(props) {
  return (
    <div className="grid place-items-center mx-5 mt-8">
      <svg
        className="w-20 h-20 text-amber-400"
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
          d={props.path}
        ></path>
      </svg>
      <h2 className="text-2xl font-extrabold dark:text-white">
        {props.tittle}
      </h2>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400">
        {props.description}
      </p>
      <a
        href={props.href}
        className="font-medium text-amber-400 hover:underline mt-4"
      >
        Go ahead
      </a>
    </div>
  );
}

export default MenuItem;
