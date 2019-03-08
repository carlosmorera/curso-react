import axios from 'axios';

const ruta = axios.create("http://localhost:3000");

export default{
 characters: {
     fetchAll: () => ruta.get("/api/character").then(res => res.data),
     create: character =>
         ruta.post("/api/character", {character}).then(res => res.data)
 }
};