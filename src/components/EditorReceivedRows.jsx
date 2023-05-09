function EditorReceivedRows(props) {
  const aceptnotification = () => {
    const message = prompt("Escriba un mensaje para el autor");

    fetch("http://localhost:3000/notificaciones", {
      method: "POST",
      contentType: "multipart/form-data",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_emisor: props.notification.id_receptor,
        id_receptor: props.notification.id_emisor,
        mensaje: message,
        id_articulo_notificacion: props.notification.id_articulo,
        id_estado: props.notification.id_estado,
        new_estado: 3,
      }),
    })
      .then(async (response) => {
        const message = await response.text();
        if (response.ok) return message;
        else throw new Error(message);
      })
      .then((response) => {
        props.load(true);
        props.showSFAlert(
          "Evaluación exitosa",
          props.notification.titulo,
          "fue aceptado exitosamente"
        );
      })
      .catch((error) => {
        props.showFAlert(
          "Evaluación fallida",
          "No se pudo aceptar el articulo / " +
            error.message.substring(12, error.message.length - 2)
        );
        console.log(error);
      });
  };

  const rejectnotification = () => {
    const message = prompt("Escriba un mensaje para el autor");

    fetch("http://localhost:3000/notificaciones", {
      method: "POST",
      contentType: "multipart/form-data",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_emisor: props.notification.id_receptor,
        id_receptor: props.notification.id_emisor,
        mensaje: message,
        id_articulo_notificacion: props.notification.id_articulo,
        id_estado: props.notification.id_estado,
        new_estado: 4,
      }),
    })
      .then(async (response) => {
        const message = await response.text();
        if (response.ok) return message;
        else throw new Error(message);
      })
      .then((response) => {
        props.load(true);
        props.showSFAlert(
          "Evaluación exitosa",
          props.notification.titulo,
          "fue rechazado exitosamente"
        );
      })
      .catch((error) => {
        props.showFAlert(
          "Evaluación fallida",
          "No se pudo rechazar el articulo / " +
            error.message.substring(12, error.message.length - 2)
        );
        console.log(error);
      });
  };

  return (
    <tr key={props.id} className="bg-white  hover:bg-[#e6f2ff] text-black ">
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        {props.notification.e_nombres}
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        {props.notification.e_apellidos}
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        {props.notification.id_articulo}
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        {props.notification.titulo}
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        {props.notification.fecha.substring(0, 10).replaceAll("-", "/")}
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        <a href={props.notification.portada} target="_blank">
          <img
            src="./src/components/assets/portada.png"
            alt="portada"
            className="h-12 hover:scale-110 transition"
          />
        </a>
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        <button
          id="message"
          type="button"
          className="px-6 py-3 font-medium whitespace-nowrap"
          onClick={(e) => {
            props.showMessage(
              "Resumen de",
              props.notification.resumen,
              props.notification.titulo,
              "resume"
            );
          }}
        >
          <img
            src="./src/components/assets/resume.png"
            alt="pdf"
            className="h-12 hover:scale-110 transition"
          />
        </button>
      </td>
      <button
        id="message"
        type="button"
        className="px-6 py-3 font-medium whitespace-nowrap"
        onClick={(e) => {
          props.showMessage(
            "Mensaje de:",
            props.notification.mensaje,
            props.notification.e_nombres + " " + props.notification.e_apellidos,
            "message"
          );
        }}
      >
        <img
          src="./src/components/assets/message.png"
          alt="pdf"
          className="h-12 hover:scale-110 transition"
        />
      </button>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        <a href={props.notification.archivo} target="_blank">
          <img
            src="./src/components/assets/pdf.png"
            alt="pdf"
            className="h-12 hover:scale-110 transition"
          />
        </a>
      </td>
      <td className="px-6 py-3 font-medium whitespace-nowrap">
        <button
          id="accept"
          type="button"
          className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg py-1.5 px-1  text-center rounded shadow-lg hover:scale-110 transition"
          onClick={(e) => {
            aceptnotification();
          }}
        >
          Aceptar
        </button>
        <button
          id="reject"
          type="button"
          className="ml-5 bg-[#F4D73B] hover:bg-[#fae360] text-[#0069a3] font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg hover:scale-110 transition"
          onClick={(e) => {
            rejectnotification();
          }}
        >
          Rechazar
        </button>
      </td>
    </tr>
  );
}

export default EditorReceivedRows;
