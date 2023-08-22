import { useEffect, useState } from "react";
import { obtenerSummoners } from "../helpers/queries";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const DetallesSummoner = () => {
  const [filtrado, setFiltrado] = useState({});
  const { summon } = useParams();

  useEffect(() => {
    obtenerSummoners().then((res) => {
      const filtro = Object.keys(res).filter((summoner) => summoner === summon);

      const summonsAtributos = filtro.reduce((obj, nombreSummon) => {
        obj[nombreSummon] = res[nombreSummon];
        return obj;
      }, {});

      setFiltrado(summonsAtributos);
    });
  }, [summon]);

  console.log(filtrado);

  return (
    <Container>
      {Object.keys(filtrado).length > 0 ? (
        <div>
          <div className="d-flex">
            <div className="align-self-center">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${filtrado[summon].image.full}`}
                alt=""
              />
            </div>

            <div>
              <h2>{filtrado[summon].name}</h2>
              <p>{filtrado[summon].description}</p>
            </div>
          </div>

        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default DetallesSummoner;
