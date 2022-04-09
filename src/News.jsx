import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Article from './Article';
import "./_news.scss"


const News = () => {

    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [erreur, setErreur] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
            .get(" http://localhost:3001/articles")
            .then((res) => setNewsData(res.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (content.length < 140) {
            setErreur(true)
        } else {
            axios.post("http://localhost:3001/articles", {
                author,
                content,
                date: Date.now()
            }).then(() => {
                setErreur(false)
                setAuthor("");
                setContent("");
                getData()
            })
        }
    }

    return (

        <div className="news-container">
            <h1>News</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    type="text"
                    placeholder="Nom" />
                <textarea
                    // style={{ border: erreur ? "1px solid red" : "1px solid #61dafb"}}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    placeholder="Message"></textarea>
                <input type="submit" value="Envoyez" />
            </form>
            {
                newsData
                    .sort((a, b) => b.data - a.data)
                    .map((article) => (
                        <Article key={article.id} article={article} />
                    ))
            }
        </div>
    );
};
export default News;