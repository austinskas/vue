<template>
  <div class="projects">
    <h1>Projects</h1>

	<b-container class="bv-example-row">
  <b-row>
    <b-col> <img class="project2" src="/project1.png" ></b-col>
      <b-col> <img class="project2" src="/project1.png" ></b-col>
  </b-row>

   <b-row>
      <b-col> <img class="project3" src="/project1.png" ></b-col>
      <b-col> <img class="project4" src="/project1.png" ></b-col>
  </b-row>


</b-container>



  </div>
</template>




<style lang="scss">

h1 {
	color:black;
}
.projects{
		display: flex;
    	flex-flow: column;
    	min-height: 80vh;
		background-color: #ffffff;
}

.bv-example-row{

}

.project1{

	width:600px;
	height: 600px;

	}

.project2{

	width:600px;
	height: 400px;
	margin:10px;

}


.project3{

	width:600px;
	height: 400px;
	margin:10px;
}

.project4{

	width:600px;
	height: 400px;
	margin:10px;

}
</style>
