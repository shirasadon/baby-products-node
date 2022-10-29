const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        img: {
            type: String,
         
          },
          title: {
            type: String,
         
          },
          description:{
         type: String,
         
    },
    category:{
      type: String,
     
    }
},
{ timestamps: true }
    )


    const Cart = mongoose.model("cart", schema);

    module.exports = Cart;


