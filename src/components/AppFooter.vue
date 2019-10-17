<template>
  <Footer class="app-footer">
<div style="padding-top: 25px">


		  <span >© 2019 Arnas </span>
</div>
  </Footer>
</template>

<script>
import routes from '@/router.js'
export default {
  name: 'AppFooter',
  data () {
    return {
      routes
    }
  },
  computed: {
    links () {
      return this.routes.filter(route => route.meta.displayName)
    }
  }
}
</script>

<style lang="scss">

	.app-footer {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #263238;
		height: 80px;
		margin: 0px;


		span {
				position: center 50% bottom 50px;


		}

	}


</style>
