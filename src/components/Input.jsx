function Input(props) {
  return (
    <div class="relative z-0">
      <input
        type={props.type}
        id={props.id}
        class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:border-amber-300 peer"
        placeholder=" "
        required
      />
      <label
        for={props.id}
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-300  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.label}
      </label>
    </div>
  );
}

export default Input;
