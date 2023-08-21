import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import "/styles/banner.css"

const Banner = ({ skins, champion }) => {

  return (
    <Carousel interval={null}>
      {skins && skins.map((skin) => (
        <Carousel.Item key={skin.id}>
            <Card.Img
              className="imgChamp"
              variant="top"
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin.num}.jpg`}
            />
            <div className="skinTitleContainer">
                {
                    skin.name !== "default"? (
                        <h2 className="skinTitle">{skin.name}</h2>
                    ): <h2 className="skinTitle">{champion}</h2>
                }
            </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
