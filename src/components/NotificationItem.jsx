import Icon from "./Icon";

function NotificationItem(props) {
  return (
    <>
      <section className="flex px-4 py-3 bg-white hover:bg-[#e6f2ff]">
        <div className="flex-shrink-0">
          <Icon
            path="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            w={6}
            h={6}
            color="blue-500"
          />
        </div>
        <div className="w-full pl-3">
          <div className="text-gray-500 text-sm mb-1.5 ">
            {`Nuevo mensaje de `}
            <span className="font-semibold text-black">{`${props.notification.e_nombres} ${props.notification.e_apellidos}:`}</span>
            <br />
            {props.notification.mensaje
              ? props.notification.mensaje.lenght <= 66
                ? `"${props.notification.mensaje}"`
                : `"${props.notification.mensaje.substring(0, 66)}..."`
              : ""}
          </div>
          <div className="text-xs font-bold text-blue-500">
            {`"${props.notification.titulo}"`}
          </div>
        </div>
      </section>
    </>
  );
}

export default NotificationItem;
