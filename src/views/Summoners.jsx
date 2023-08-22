import { useEffect, useState } from "react";
import { obtenerSummoners } from "../helpers/queries";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Summoners = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        obtenerSummoners().then((res) =>{
            setData(res)
        })
    }, [])


    return (
        <Container className="my-5">
            {
                Object.keys(data).map((summon) =>(
                    <Link key={summon} to={`/summoners/${summon}`} className="mx-2 my-2">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${summon}.png`}></img>
                    </Link>
                ))
            }
        </Container>
    );
};

export default Summoners;