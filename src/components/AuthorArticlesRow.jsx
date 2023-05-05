import useFetch from "../hooks/useFetch";
import Icon from "./Icon";

function AuthorArticlesRows(props){
    const [editors, isLoading, setIsLoading] = useFetch(
        "editores", console.log(props.autor),
        (error) => {
            console.error("Fallo al cargar los editores");
        },
    );
    
    const sendArticle = (index) => {
        const message =  prompt("Escriba un mensaje para el editor");

        fetch("http://localhost:3000/notificaciones", {
            method: "POST",
            contentType: "multipart/form-data",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id_emisor: props.autor,
                id_receptor: editors[0]["id_editor"],
                mensaje: message,
                id_articulo_notificacion: index,
                id_estado: 2
            }),
        }).then((response) => {
            if (!response.ok) alert("No se pudo enviar el articulo / ");
            else alert("Articulo enviado");
            console.log(response.json());
        })
        .catch((error) => alert(error));
    };
    
    const deleteArticle = async (index) => {
        const response = await fetch("http://localhost:3000/articulos/" + index, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 204) {
            alert("Articulo eliminado");
        } else if(response.status === 500){
            alert("No se pudo eliminar el articulo");
        } else alert("No se pudo encontrar el articulo")
    };

    return(
        <tr key={props.id}  className="bg-white  hover:bg-[#e6f2ff] text-black">
            <td className="px-6 py-3 font-medium whitespace-nowrap">{props.article.id}</td>
            <td className="px-6 py-3 font-medium whitespace-nowrap">{props.article.titulo}</td>
            <td className="px-6 py-3 font-medium whitespace-nowrap">{props.article.fecha_creacion}</td>
            <td className="px-6 py-3 font-medium whitespace-nowrap">
                <a href={props.article.portada} target="_blank" ><img src="./src/components/assets/portada.png" alt="portada" /></a>
            </td>
            <td className="px-6 py-3 font-medium whitespace-nowrap">
                <a href={props.article.archivo} target="_blank" ><img src="./src/components/assets/pdf.png" alt="pdf"/></a>
            </td>
            <td className="px-6 py-3 font-medium whitespace-nowrap">{props.article.estado}</td>
            <td className="px-6 py-3 font-medium whitespace-nowrap">
            <button
            id="send"
            type="button"
            className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg py-1.5 px-1  text-center rounded shadow-lg focus:ring-blue-900 focus:ring-4"
            onClick={(e)=>{sendArticle(e.target.parentElement.parentElement.children[0].textContent)}}
          >
            Enviar
          </button>
                <button
                id="edit"
            type="button"
            className="ml-5 bg-[#F4D73B] hover:bg-[#fae360] text-[#0069a3] font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg focus:ring-[#eecd12] focus:ring-4"
          >
            Editar
          </button>
          <button
            id="delete"
            type="button"
            className="ml-5 bg-[#E36727] hover:bg-[#e87212] text-white font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg focus:ring-[#d34f0e] focus:ring-4"
            onClick={(e)=>{deleteArticle(e.target.parentElement.parentElement.children[0].textContent)}}
          >
            Eliminar
          </button></td>
        </tr>
    );
}

export default AuthorArticlesRows;