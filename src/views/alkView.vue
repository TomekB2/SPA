<template>
  <div class="greetings"><h1 class="green">Kalkulator Alkoholu</h1>
  <form>
    <h3>Ekstrakt poczatkowy:</h3>
    <input type="number" v-model="ekstp">
    <h3>Ekstrakt koncowy:</h3>
    <input type="number" v-model="ekstk">
  </form><br>
  <button v-on:click="liczalk()">Licz Alkohol</button>
    <h3>Alkohol: {{ alk }} %</h3> <br>
</div>
</template>

<script>
export default {
  data(){
    return{
  ekstp: '',
  ekstk: '',
  alk:'',
    }
  },
  methods:{
    liczalk()
      {
        this.alk = ((this.ekstp - this.ekstk)/1.938).toFixed(2);
      }
    }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
