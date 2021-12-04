import React from "react";
import "./article.css";

const Article = ({ image, title, date }) => {
  return (
    <div className="article">
      <div className="article-image">
        <img src={image} alt="article" />
      </div>

      <div className="article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
