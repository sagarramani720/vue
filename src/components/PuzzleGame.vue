<template>
    <h1 class="main-h1">Puzzle Game</h1>
    <div class="container">
        <div class="grid">
            <div class="cell" id="box1">1</div>
            <div class="cell" id="box2">2</div>
            <div class="cell" id="box3">3</div>
            <div class="cell" id="box4">4</div>
            <div class="cell" id="box5">5</div>
            <div class="cell" id="box6">6</div>
            <div class="cell" id="box7">7</div>
            <div class="cell" id="box8">8</div>
            <div class="cell" id="box9">9</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  