import { Col } from "react-bootstrap";
import "/styles/cardCampeon.css"
import { Link } from "react-router-dom";

const CardCampeon = ({ nombreCampeon }) => {

  return (
    <>
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={4}
        xl={4}
        className="mb-3 d-flex justify-content-center"
      >
        <Link className="cardChampion" to={`/${nombreCampeon}`}>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nombreCampeon}_0.jpg`}
            className="card-img-top imgChampion"
            alt="imagenPeli"
          />
            <h3 className="nameChampion">{nombreCampeon}</h3>
        </Link>
      </Col>
    </>
  );
};

export default CardCampeon;
