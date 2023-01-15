import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import "../Styles/Home.css"
import Sidebar from '../Components/Sidebar'
const Home = () => {
    // const [state,dispatch]=useReducer(reducer,initialState)
    const [Products,setProducts]=useState([])
    const GetProducts=()=>{
        fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then(r=>r.json()).then(r=>{
            setProducts(r)
            console.log(r);}).catch(err=>{console.log(err);})
    }
    useEffect(()=>{
        GetProducts()
    },[])
  return (
    <div className='Container'>
        <Sidebar/>
        <div className='Products'>
        {Products.length>0&&Products.map((data,i)=>(
            <ProductCard key={i} data={data}/>
        ))}
    </div>
    </div>
    
  )
}

export default Home