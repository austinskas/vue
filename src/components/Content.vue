<template>
  <div class="content">


    <div class="name" > <h1>Developer portfolio </h1>
     <h1>Arnas Austinskas </h1>
</div>

  </div>
</template>

<script>



export default {
  name: 'Content',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
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
	font-size:18px;
}

.content{
		display: flex;
    	flex-flow: column;
    	min-height: 80vh;
		background-color: red;
		color:#fff;
		background: url(/Background-1.jpg);
		background-size: auto 700px;
		background-repeat: no-repeat;
		background-position: left 100% bottom 45%;



}

.name {
	width:400px;
	height: 200px;
	color: black;
	position: relative;
	float: center;
	top: 150px;

}


</style>
