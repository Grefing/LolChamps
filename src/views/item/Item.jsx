import "/styles/item.css"

const Item = ({item}) => {

    return (
        <>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/${item}.png`} alt="" style={{width: "64px", height: "64px" }} className="imgItem"/>
        </>
    );
};

export default Item;