<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
	  <router-link to="/projects">Projects</router-link>|
	  <router-link to="/contacts">Contacts</router-link>|

    </div>


    <router-view/>
	<AppFooter  class="app-footer"/>

  </div>


</template>

<script>

import AppFooter from '@/components/AppFooter'
export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>

<style lang="scss">


@import url('https://fonts.googleapis.com/css?family=EB+Garamond|Montserrat+Alternates&display=swap&subset=latin-ext');



	#app {

		font-family: 'Montserrat Alternates', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #ffffff;
		margin:0px;
		font-size: 18px;

	}
	#nav {
		padding: 30px;
		background-color: #37474F;
		a {
			font-weight: bold;
			color: #f8f8f8;
			&.router-link-exact-active {
				color: #3F729B;
			}
			margin: 5px;
		}
	}




</style>
