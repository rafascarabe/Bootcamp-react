import api from "../../api";
import styles from "./Musicas.module.css";
import logo from "../../utils/assets/logo.svg";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import CardMusica from "../../components/CardMusica/CardMusica";

const Musicas = () => {
  const [cardsData, setCardsData] = useState();
  function recuperarValorDoCard() {
    api
      .get()
      .then((response) => {
        const { data } = response;
        console.log(data);
        setCardsData(data);
      })
      .catch(() => {
        console.log("Deu erro, tente novamente!");
      });
  }

  useEffect(() => {
    recuperarValorDoCard();
  }, []);

  return (
    <>
      <NavBar logoInicio={logo} />
      <div className={styles["content-musicas"]}>
        
        <CardMusica
          anoLancamento={2001}
          artista={"TESTE MANUAL"}
          imagemSrc={logo}
          genero={"Teste"}
          nomeMusica={"Teste Música Card Manual"}
        />

        {cardsData &&
          cardsData.map((data, index) => (
            <div key={index} className={styles["quadrado"]}>
              <CardMusica
                artista={data.artista}
                nomeMusica={data.nomeMusica}
                genero={data.genero}
                anoLancamento={data.ano}
                imagemSrc={data.imagem}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default Musicas;
