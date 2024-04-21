import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

function NewsBoard({category}) {

    const [Article,setArticle]=useState([])

    useEffect(()=>{

        let url=` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setArticle(data.articles))

    },[category])
    
  return (
    <>
    <div>

        <h2 className='text-center mt-2 fw-bolder'>HOT <span className='badge bg-danger'>News</span></h2>
        
            
            
                <h3 className='text-center mt-3'>{category.toUpperCase()}</h3>
                
        
         
        
        {
            Article.map((news,index)=>{
                return <Newsitem key={index} title={news.title} description={news.description} urlToImage={news.urlToImage} url={news.url} />
            })
        }
    </div>
    </>
  )
}

export default NewsBoard