<template>
	<div class="people-wrapper">
		<h2>{{ peopleCount }}</h2>
		<ul class="people-list">
			<li v-for="person in people" :key="person._id">
				<person :data="person"></person>
			</li>
		</ul>
	</div>
</template>


<script>

	import Person from './Person.vue'

	// a little mock data:	
	const dataUrl = 'https://jsonbin.io/b/595b2be7194a6c7f2b904004';


	export default {

		name: 'people',

		/** Component data */
		data () {
			return {
				people: {},
				dataSet: false
			}
		},

		/** Subcomponents */
		components: { Person },

		/** Computed attributes */
		computed: {

			/**
			 * We pluralize the people count
			 */
			peopleCount() {

				let _count = this.people.length;
				let _string = 'teammember';
				if( _count !== 1 )
					_string += 's';

				return _count+' '+_string;
			}

		},

		/** When this component gets created */
		created() {
			this.fetch()
		},

		/** Compontent methods */
		methods: {

			//fetch the external data
			fetch(){
				axios.get( dataUrl ).then( this.refresh );
			},

			//map data to the people attribute
			refresh( response ){

				this.dataSet = response;
				this.$emit('refreshData', response );

				this.people = response.data;
			}

		}
	}
</script>

<style lang="scss">
	
	body{
		background: papayawhip;
		font-family: sans-serif;
	}

	h2{
		text-align: center;
		padding-bottom: 1em;
	}

	.people-list{
		list-style: none;
		margin: 0 auto;
		max-width: 75%;

		display: grid;
		grid-template-columns: repeat( 4, 1fr );
		grid-template-rows: auto;
	}
</style>