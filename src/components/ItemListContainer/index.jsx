import React,{useState,useEffect} from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/itemList";
import Title from "../Title"

const films = [
  {id:1, image: 'https://m.media-amazon.com/images/I/41HjslrKZ2L._AC_.jpg', title: "Interstellar"},
  {id:2, image: 'https://cdn.europosters.eu/image/1300/posters/star-wars-classic-i83520.jpg', title: "Star Wars"},
  {id:3, image: 'https://m.media-amazon.com/images/I/415SefBdppL._AC_.jpg', title: "Gravity"}
];


export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    const getData = new Promise(resolve =>{
      setTimeout(()=>{
        resolve(films);
      },3000);
    });
    getData.then(res => setData(res))

  },[])
  const onAdd = (quantity) =>{
      console.log(`Compraste ${quantity} unidades`)
    }
  
    return(
      <>
      <Title greeting="Tomas" />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data}/>
      </>  
    )
}

export default ItemListContainer;