import React from 'react';
import "./styles/components/_article.scss"

const Article = ({ article }) => {

    const dataParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: 'long',
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
        return newDate;
    }

    return (


        <div className="article">
            <div className="card-header">
                <div className="container">
                <h3>{article.author}</h3>
                <em>Posté le :{dataParser(article.date)}</em>
                </div>
                <p>{article.content}</p>

                <div className="btn-container">
                    <button>Editer</button>
                    <button>Supprimer</button>
                </div>
            </div>
        </div>
    );
};

export default Article;