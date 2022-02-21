<template>
   <!-- <h3>Formulario</h3>
    <form @submit.prevent="registrar">
            <fieldset>
                <legend>Datos personales</legend>
                <div class="mb-3">
        <label class="form-label" for="correo">Email</label>
        <input class="form-control" id="correo" type="email" v-model="cliente.email">
        <label for="producto">Selecciona producto</label>
        <br>
        </div>
        <select id="producto" v-model="cliente.producto" aria-label="producto">
            <optgroup label="prendas">
            <option value="camisa">camisa</option>
            <option value="pantalon">pantalon</option>
            <option value="chaqueta">chaqueta</option>
        </optgroup>
        <optgroup label="Informática">
            <option value="ordenador">Ordenador</option>
            <option value="ps5">Play Station 5</option>
        </optgroup>
        </select>
        <br>
        <label for="Fecha">Fecha de entrega</label>
        <input aria-describedby="formato" id="fecha" type="date" v-model="cliente.fecha">
        <div id="formato"><h2></h2>      </div>
        <br>
        </fieldset>
        <input type="submit" value="Registrar cliente">
    </form>> -->



<div class="container">
  <form @submit.prevent="registrar">
    <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Nombre" v-model="cancion.nombre" required/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="text"  v-model="cancion.genero" placeholder="Género"/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
    </div>
    <div class="row">
      <h4>Estado</h4>
      <div class="input-group" >
        <input id="payment-method-card" type="radio"  v-model="cancion.estado" name="payment-method" value="Disponible" checked="true"/>
        <label for="payment-method-card"><span><i class="fa fa-cc-visa"></i>Disponible</span></label>
        <input id="payment-method-paypal" type="radio" v-model="cancion.estado" name="payment-method" value="Descatalogada"/>
        <label for="payment-method-paypal"> <span><i class="fa fa-cc-paypal"></i>Descatalogada</span></label>
      </div>
      <div class="input-group input-group-icon">
        <input type="text" v-model="cancion.artista" placeholder="Artista"/>
        <div class="input-icon"><i class="fa fa-credit-card"></i></div>
      </div>
    </div>
    <div class="row">
      <h4>Terms and Conditions</h4>
      <div class="input-group">
        <input id="terms" type="checkbox" required/>
        <label for="terms">Acepto los términos y condiciones de este servicio</label>
      </div>
      <div class="input-group">
        <input id="payment-method-card" type="submit"/>
      </div>
    </div>
  </form>
</div>


</template>

<script>
import firebase from '../firebase'
//import {MDCTextField} from '@material/textfield';

export default {
    mounted(){
//const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    },
    data(){
        return{
            cancion:{
                nombre:"",
                genero:"",
                estado:"",
                artista:""
           }
        }
    },
    methods:{
        registrar(){
            const db = firebase.collection("canciones");
            var cliente={
                nombre : this.cancion.nombre,
                genero : this.cancion.genero,
                estado : this.cancion.estado,
                artista : this.cancion.artista
            }
            db.add(cliente)
            window.alert("¡Solicitud enviada con éxito!")
        }
    }
    
}
</script>

<style scoped>
/* 64ac15 */
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
}
h4 {
  color: #f0a500;
}
input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon i {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #f0a500;
  color: #fff;
  border-color: #bd8200;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
  padding-left: 1.6em;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  background-color: #f0a500;
  color: #fff;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}

label{
    padding: 0px;
}
</style>