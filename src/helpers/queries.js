import axios from "axios";


export const obtenerCampeones =  async () =>{
    try {
      const {data} = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.15.1/data/es_AR/champion.json`);
      return data.data;
    } catch (e) {
      console.log(e);
    }
  }


export const obtenerCampeon =  async (nombreCampeon) =>{
    try {
      const {data} = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.15.1/data/es_AR/champion/${nombreCampeon}.json`);
      return data.data[nombreCampeon];
    } catch (e) {
      console.log(e);
    }
  }

export const obtenerItems = async () =>{
  try {
    const {data} = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.16.1/data/es_AR/item.json`)

    return data;
  } catch (e) {
    console.log(e);
  }
}

export const obtenerSummoners = async () =>{
  try {
    const {data} = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.16.1/data/es_AR/summoner.json`)
    return data.data;
  } catch (e) {
    console.log(e);
  }
}