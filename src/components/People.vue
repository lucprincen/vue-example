<template>
	<div class="people-wrapper" aria-live="polite">
		<h2>{{ peopleCount }}</h2>
	
		<div class="controls">
			<add-person></add-person>
			<people-filter></people-filter>
		</div>
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
	import AddPerson from './AddPerson.vue'

	// a little mock data:	
	const dataUrl = 'https://jsonbin.io/b/595bee02194a6c7f2b904008';


	export default {

		name: 'people',

		/** Subcomponents */
		components: { Person, PeopleFilter, AddPerson },

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

				let _count = this.people.length
				let _string = ( _count == 1 ? 'person' : 'people' )

				return _count+' '+ _string
			},

		},

		/** When this component gets created */
		created() {
			this.populatePeople()
		},

		/** Compontent methods */
		methods: {

			//fetch the external data, and populate the store plugin
			populatePeople(){

				let _people = window.localStorage.getItem( 'testCasePeople' );

				//if people is null, fetch new data:
				if( _people == null ){

					this.setPeopleData()

				}else{	
					//else, populate the existing data 
					this.$store.dispatch( 'populate', JSON.parse( _people ) )
				}
				
			},

			/** Nothing in local storage found, find it through an ajax call */
			setPeopleData(){
				
				console.log( 'fetching fresh data' )
				axios.get( dataUrl ).then( ( response ) => {

					this.$store.dispatch( 'populate', response.data );
			
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

	.people-list, .people-wrapper > .controls{
		list-style: none;
		margin: 0 auto 2em auto;
		padding: 0;
		max-width: 75%;
	}

	.people-wrapper > .controls{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.people-list{
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2em;
		grid-template-rows: auto;
	}

	.svg-icon {
	  width: 2em;
	  height: 2em;
	  display: inline-block;
	}

	.svg-icon path,
	.svg-icon polygon,
	.svg-icon rect {
	  fill: #4691f6;
	}

	.svg-icon circle {
	  stroke: #4691f6;
	  stroke-width: 1;
	}


	.btn{
		background: #4691f6;
		color: white;
		border-radius: 3px;
		border: 0;
		padding: .4em .8em;
		display: flex;
		align-items: center;
		cursor: pointer;

		.svg-icon{
			circle{
				stroke: white;
			}
			path, polygon, rect{
				fill: white;
			}
		}

		span{
			padding: 0 0 0 .8em;
		}

		&.primary{
			background: dodgerBlue;
		}

		&:hover{
			background: black;
		}

		&.danger{
			background: transparent;
			color: crimson;
			text-decoration: underline;

			&:hover{
				color: black;
			}
		}	
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