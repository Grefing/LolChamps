import { useEffect, useState } from "react";
import { obtenerItems } from "../helpers/queries";
import { Container } from "react-bootstrap";
import Item from "./agregados/Item";

const Items = () => {
    const [data, setData] = useState({});

     useEffect(() => {
        obtenerItems().then((res) =>{
            setData(res.data);
          })
     }, [])

     console.log(data);
    return (
        <Container>
            {
                Object.keys(data).length > 0? (
                    Object.keys(data).map((item) =>(
                        <Item key={item.name} item={item} ></Item>
                    ))
                ): (console.log("error"))
            }
        </Container>
    );
};

export default Items;