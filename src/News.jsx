import React from 'react';
import "./_news.scss"


const News = () => {
    return (

        <div className="news-container">
            <h1>News</h1>
            <form>
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Envoyez" />
            </form>
        </div>
    );
};
export default News;