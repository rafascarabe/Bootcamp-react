
import api from "./api";
import "./utils/globals.css";

function App() {


  function listar() {
    api
      .get()
      .then((respostaObtida) => {

        console.log(respostaObtida);
      })
      .catch((erroOcorrido) => {
        // cairá aqui se houver algum erro durante a requisição 
        console.log(erroOcorrido);
      })
  }
  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
    </>
  );
}
export default App;  
