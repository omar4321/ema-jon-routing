import { useEffect } from "react";
import { useState } from "react"

const Useproducts = ()  => {

const [product,setProduct] = useState ([]);

useEffect (()=>{
    fetch('./products.JSON')
    .then(res => res.json())
    .then(data => setProduct(data))
},[])

return[product];

}

export default Useproducts;