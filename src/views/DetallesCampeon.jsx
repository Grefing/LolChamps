import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerCampeon } from "../helpers/queries";
import { Row, Card, Col } from "react-bootstrap";
import "/styles/detailChampion.css";
import Banner from "../components/Banner";
import StatsCampeon from "./campeon/StatsCampeon";
import Loader from "../components/Loader";

const DetallesCampeon = () => {
  const [data, setData] = useState("");
  const [spells, setSpells] = useState([]);
  const [passiveImg, setPassiveImg] = useState({});
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const { champion } = useParams();

  useEffect(() => {
    setIsLoading(true)
    obtenerCampeon(champion).then((res) => {
      setData(res);
      if (res.spells && res.spells.length > 0) {
        setSpells(res.spells);
        setPassiveImg(res.passive.image.full); 
      }
      setIsLoading(false)
    });

  }, [champion]);

  return (
    <section className="cardContainer">
      {
        isLoading ? (
          <Loader></Loader>
        ) : (<Row>
          <Col md={12} lg={6}>
            <Banner skins={data.skins} champion={champion}></Banner>
          </Col>
          <Col md={12} lg={6}>
            <Card.Body>
              <Card.Title className="cardTitle">{`${champion}: ${data.title}`}</Card.Title>
              <div>
                <p>{data.lore}</p>
              </div>
  
              <h4>Habilidades:</h4>
              <div className="containerSpell">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/passive/${passiveImg}`}
                  alt=""
                  className="imgSpell"
                  onClick={() => (
                    setDescription(data.passive.description),
                    setTitle(data.passive.name)
                  )}
                />
  
                {spells.map((spell) => (
                  <img
                    key={spell.id}
                    src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${spell.image.full}`}
                    className="imgSpell"
                    onClick={() => (
                      setDescription(spell.description), setTitle(spell.name)
                    )}
                  />
                ))}
              </div>
  
              <div className="spellDesc">
                <h5>{title}</h5>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
  
              <div>
                <StatsCampeon stats={data.stats}></StatsCampeon>
              </div>

            </Card.Body>

          </Col>
    
        </Row>)
      }
    </section>
  );
};

export default DetallesCampeon;
