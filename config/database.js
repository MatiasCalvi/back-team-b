const mongoose = require("mongoose");
let connection = async () => {
  try {
    //intento conextarme a la base de datos con el metodo connect de mongoose
    mongoose.connect(
      //link de conexion a data base
      process.env.LINK_DB,
      //objeto con config de conexion
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log(error.message);
  }
};
connection();