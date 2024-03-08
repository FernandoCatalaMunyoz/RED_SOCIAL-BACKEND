import express from "express";
import "dotenv/config";
import { dbConection } from "./database/db.js";

import router from "./routes/router.js";

const app = express();
app.use(express.json()); // express.json() para  poder trabajar con el body
const PORT = process.env.PORT || 4001;

//RUTA QUE EMVIA A ROUTES.JS
app.use("/api", router); // /api/auth prefijo que es igual en todas las rutas, en este caso de authController

//CONEXION BASE DE DATOS
dbConection()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// API ROUTES

app.get("/api/healthy", (req, res) => {
  res.status(200).json({
    succes: true,
    message: "server is healthy",
  });
});
