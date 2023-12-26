import { Grid } from "@mui/material";
import "./App.css";
import Home from "./pages/Home/Home";
import imagem from "./assets/img/image.jpg";

function App() {
  return (
    <Grid>
      <img className="imagem" src={imagem} alt="Imagem de perfil" />
      <Home />
    </Grid>
  );
}

export default App;
