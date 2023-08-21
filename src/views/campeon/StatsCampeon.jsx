import { AiFillHeart } from "react-icons/ai";
import { GiBroadsword, GiStripedSword } from "react-icons/gi";
import { BsFillShieldFill } from "react-icons/bs";
import "/styles/statsCampeon.css";

const StatsCampeon = ({ stats }) => {
  return (
    <>
      {stats ? (
        <div className="statsContainer"> 
          <div className="statContainer">
            <GiBroadsword className="statIcons"></GiBroadsword>
            <p className="text-center">{stats.attackdamage}</p>
          </div>

          <div className="statContainer">
            <AiFillHeart className="statIcons"></AiFillHeart>
            <p className="text-center">{stats.hp}</p>
          </div>

          <div className="statContainer">
            <BsFillShieldFill className="statIcons"></BsFillShieldFill>
            <p className="text-center">{stats.armor}</p>
          </div>

          <div className="statContainer">
            <GiStripedSword className="statIcons"></GiStripedSword>
            <p className="text-center">{stats.attackspeed}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default StatsCampeon;
