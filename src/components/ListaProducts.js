import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';


export default function Home() {
  const [query, setQuery] = useState([])
  let navigate = useNavigate();

  const getFirstTwelve = () =>{
    axios.get(`https://dummyjson.com/products`)
    .then(function (response) {
      console.log(response.data.products)
      setQuery(response.data.products.filter(product => product.id));
      console.log(response.data.products)
    })
    .catch(function (error) {
        console.log(error)
    })
  }
  useEffect(()=>{
    getFirstTwelve()
  },[])


  return (
    <>
      {query.map( 
        (Product)=>(
          <>
          <div class="container text-center">
          <div class="row row-cols-1  g-4 mb-5">
            <div id="card-e" class=" m-5 pb-3 pt-3">
            <div key={Product.id} onClick={() => navigate(`/Detalle/${Product.id}`)}>
              <center>
            <p className="text-xl">{Product.title}</p>
            <img className="product-tam" src={Product.images[0]}/>
            </center>
          </div>
          </div>
          </div>
          </div>
          </>
        )
      )}
    </>
  )
}
