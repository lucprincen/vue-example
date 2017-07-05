<template>
	<div class="people-wrapper" aria-live="polite">
		<h2>{{ peopleCount }}</h2>
		<people-filter></people-filter>
		<ul class="people-list">
			<li v-for="( person, index ) in people" :key="person._id">
				
				<person :data="person" :index="index"></person>

			</li>
		</ul>
	</div>
</template>


<script>

	import Person from './Person.vue'
	import PeopleFilter from './Filter.vue'
	import {mapGetters} from 'vuex'

	// a little mock data:	
	const dataUrl = 'https://jsonbin.io/b/595bee02194a6c7f2b904008';


	export default {

		name: 'people',

		/** Subcomponents */
		components: { Person, PeopleFilter },

		/** Computed attributes */
		computed: {

			/**
			 * People are stored in the store plugin
			 */
			people() {

				switch( this.$store.state.filterBy ){

					case 'company':
						return this.$store.getters.peopleByCompany

					default:
						return this.$store.getters.peopleByName
				}
			},

			/**
			 * We pluralize the people count, working with the local computed data
			 */
			peopleCount() {

				return this.people.length
				let _count = this.$store.state.count;
				let _string = 'teammember';
				if( _count !== 1 )
					_string += 's';

				return _count+' '+_string;
			},

			//Filtered collections in the store plugin
			//mapGetters([ 'peopleByName', 'peopleByCompany' ])

		},

		/** When this component gets created */
		created() {
			this.populatePeople()
		},

		/** Compontent methods */
		methods: {

			//fetch the external data, and populate the store plugin
			populatePeople(){
				axios.get( dataUrl ).then( ( response ) => {
					this.$store.commit( 'populate', response.data );
				});
			}
		}
	}
</script>

<style lang="scss">

	*{
		box-sizing: border-box;
	}
		
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
		grid-template-columns: 1fr;
		grid-gap: 2em;
		grid-template-rows: auto;
	}

	@media screen and ( min-width: 768px ){
		.people-list{
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and ( min-width: 1100px ){
		.people-list{
			grid-template-columns: repeat( 3, 1fr );
		}
	}

</style>