const { Article } = require("../models/article");

const createArticle = (img, title, text, alt) => {
  return new Promise((resolve, reject) => {
    let article = new Article({
      img,
      title,
      text,
      alt,
    });
    article.save((err, articleData) => {
      articleData ? resolve(articleData) : reject(err);
    });
  });
};

const getArticles = () => {
  return new Promise((resolve, reject) => {
    Article.find().then((articleData) => {
      articleData ? resolve(articleData) : reject(err);
    });
  });
};

const getArticleById = (_id) => {
  return new Promise((resolve, reject) => {
    Article.findById(_id, (err, article) => {
      article ? resolve(article) : reject(err);
    });
  });
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById
};
