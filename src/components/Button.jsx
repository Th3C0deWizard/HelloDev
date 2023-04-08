function Button(props) {
  let style =
    " font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded ml-2 shadow-lg focus:ring-4";

  style = props.style + style;

  return (
    <button type="button" className={style}>
      {props.text}
    </button>
  );
}

export default Button;
