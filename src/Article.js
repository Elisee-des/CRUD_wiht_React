import React from 'react';
import "./styles/components/_article.scss"

const Article = ({ article }) => {
console.log(article);
    return (
        <div className="article">
            <div className="card-header">
                <div className="container">
                <h3>{article.author}</h3>
                <em>Posté le :{article.date}</em>
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