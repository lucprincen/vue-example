<template>
	<div class="card">
		<img :src="data.picture" class="avatar"/>
		<strong>{{ data.first_name }} {{ data.last_name }}</strong>
	</div>
</template>

<script>

export default {
	name: 'person',
	props: ['data'],
}

</script>

<style scoped lang="scss">
	
	.card{
		background: white;
		box-shadow: 0 2px 4px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.1);
		border-radius: 3px;
		padding: .5em 1em;
		margin: 0 1.5em 1.5em 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.avatar{
			border-radius: 32px;
		}
	}


</style>