function Button(props) {
  let style =
    " font-medium text-lg  py-2.5 text-center rounded shadow-lg focus:ring-4";

  style = props.style + style;

  return (
    <button type="button" className={style}>
      {props.text}
    </button>
  );
}

export default Button;
