import React from 'react'
import '../components/news.css'
import image from "../news.jpg"

function Newsitem({title,description,urlToImage,url}) {
  return (
<> 

    <div className="card bg-dark text-light d-inline-block mb-3 px-3 py-3 mx-3 my-3" style={{maxWidth:"345px"}}>
  <img src={urlToImage?urlToImage:image} style={{height:"200px",width:"310px"}} className="card-img-top" alt="image crashed" />
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,50):"Unfortunately, due to server issues, this data has expired. "}</h5>
    <p className="card-text">{description?description.slice(0,90):"Unfortunately, due to server issues, this data has expired."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>

</>
   
  )
}

export default Newsitem