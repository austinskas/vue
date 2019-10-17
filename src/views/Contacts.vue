<template>
  <div class="contacts">
    <h1>Contacts</h1>

<div>
	<span> Message</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="Writte text here"></textarea>

<BaseButton @click="submitForm"> Submit </BaseButton>

<button class="button">
	Delete</button>
</div>

</div>


</template>

<script>
import BaseButton from '@/components/BaseButton'
import Loading from '@/components/Loading'
import { mapActions } from 'vuex'
export default {
	components: {
		BaseButton,
		Loading
	},
	data () {
		return {
			message: null
		}
	},
	methods: {
		...mapActions({
			sendMessage: 'sendMessage'
		}),
		async submitForm () {
			this.$loading(true)
			await this.sendMessage()
			this.$loading(false)
		}
	}
}
</script>
<style lang="scss">

h1 {

	color:black;
}
.contacts{
		display: flex;
    	flex-flow: column;
    	min-height: 80vh;
		background-color: #ffffff;
		}

		.message{
			width: 600px;
			height: 200px;
		}

		.button{
			text-align: center;
			width:60px;
			height:30px;

		}

		label {
			color:black;
		}

		span{
			color: black;
		}
</style>
