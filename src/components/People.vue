<template>
	<div class="people-wrapper">
		<h2>{{ peopleCount }}</h2>
	</div>
</template>


<script>
	export default {

		name: 'people',
		data () {
			return {}
		},
		computed: {

			peopleCount() {
				return '';
			}

		}
	}
</script>