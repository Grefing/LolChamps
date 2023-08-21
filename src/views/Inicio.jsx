import { useState, useEffect } from "react";
import { obtenerCampeones } from "../helpers/queries";
import CardCampeon from "./campeon/CardCampeon";
import { Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GiLoveHowl } from "react-icons/gi";
import "/styles/inicio.css";
import Loader from "../components/Loader";

const Inicio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (datos) => {
    obtenerCampeones().then((res) => {
      const filtro = datos.campeon.toLowerCase();
      const campeonesFiltrados = Object.keys(res).filter((campeon) =>
        campeon.toLowerCase().includes(filtro)
      );

      const campeonesFiltradosConAtributos = campeonesFiltrados.reduce(
        (obj, nombreCampeon) => {
          obj[nombreCampeon] = res[nombreCampeon];
          return obj;
        },
        {}
      );

      setData(campeonesFiltradosConAtributos);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    obtenerCampeones().then((res) => {
      if (res) {
        setData(res);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-center my-3">
        <form
          action=""
          className="align-self-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" className="inputInicio" {...register("campeon")} />
        </form>
      </div>
      <Row className="d-flex justify-content-center my-5">
        {isLoading ? (
          <Loader></Loader>
        ) : (Object.keys(data).length > 0 ? (
          Object.keys(data).map((nombreCampeon) => (
            <CardCampeon
              key={nombreCampeon}
              nombreCampeon={nombreCampeon}
            ></CardCampeon>
          ))
        ) : (
          <h3 className="my-5 text-center">No se encontraron campeones!</h3>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
