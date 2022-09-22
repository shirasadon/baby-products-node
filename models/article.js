const mongoose = require("mongoose");

const Joi = require("joi");
const { string } = require("joi");

const schema = new mongoose.Schema(
    {
        img: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          text:{
         type: String,
          required:true
    },
},
{ timestamps: true }
    )

    const Article = mongoose.model("Article", schema);

function validateArticle(article) {
  const schema = Joi.object({
    img: Joi.string().min(5).max(1000).required(),
    title: Joi.string().min(5).max(30).required(),
   text: Joi.string()
      .min(6)
      .max(2000)
      .required()
  });

  return schema.validate(article);
}

exports.Article = Article;

exports.validateArticle = validateArticle;