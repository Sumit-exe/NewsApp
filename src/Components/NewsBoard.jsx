import { useEffect, useState } from "react"
import NewsItem from "./newsItem";

const NewsBoard = ({category , country}) => {
    const [articles , setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data=> setArticles(data.articles))
    },[category,country])

  return (
    <div>
      <h2 className="text-center mt-3 ">Latest <span className="badge bg-danger  ">News</span></h2>
      {articles.map((News,index)=>{
        return <NewsItem key={index} title={News.title} description={News.description} src={News.urlToImage} url={News.url}  />
      })}
    </div>
  )
}

export default NewsBoard
