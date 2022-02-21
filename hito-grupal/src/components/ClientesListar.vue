<template>
<div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Género</th>
      <th scope="col">Estado</th>
      <th scope="col">Artista</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cancion in canciones" :key="cancion.id">
      <td>{{cancion.nombre}}</td>
      <td>{{cancion.genero}}</td>
      <td>{{cancion.estado}}</td>
      <td>{{cancion.artista}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import firebase from "../firebase"
export default {
    data(){
        return{
            canciones:[]
        }
    },
    mounted(){
        const db = firebase.collection("/canciones")
        this.canciones=db.onSnapshot(this.onDataChange)
        console.log(this.canciones)
    },
    methods:{
onDataChange(items){
    let _clientes=[];
items.forEach((item)=>{
let id = item.id;
_clientes.push({
    id:id,
    nombre:item.data().nombre,
    genero:item.data().genero,
    estado:item.data().estado,
    artista:item.data().artista
})
})
this.canciones=_clientes;
}
    }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  background: linear-gradient(45deg, #49a09d, #5f2c82);
  font-family: sans-serif;
  font-weight: 100;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
table {
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
th,
td {
  padding: 15px;
  background-color: rgba(221, 212, 131, 0.2);
  color: rgb(0, 0, 0);
}
th {
  text-align: left;
}
thead th {
  background-color: #ac7f2b;
}
tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
tbody td {
  position: relative;
}
tbody td:hover:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

</style>