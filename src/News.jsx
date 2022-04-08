import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Article from './Article';
import "./_news.scss"


const News = () => {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
        .get(" http://localhost:3001/articles")
        .then((res) => setNewsData(res.data))
    }
    return (

        <div className="news-container">
            <h1>News</h1>
            <form>
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Envoyez" />
            </form>
            {
                newsData.map((article) => (
                    <Article key={article.id} article={article} />
                ))
            }
        </div>
    );
};
export default News;