<template>
	<div>
		{{ data.first_name }} {{ data.last_name }}
	</div>
</template>

<script>

export default {
	name: 'person',
	props: ['data'],
}

</script>