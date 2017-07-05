import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

/**
 * Create the store class
 */
const store = new Vuex.Store({

	state: {
		people: [],
		filterBy: false
	},

	getters: {

		/** Return all people as-is */
		allPeople: state => {
			return state.people;
		},

		/** Get the total number of people */
		peopleCount: state => {
			return state.people.length;
		},

		/** Order people by name */
		peopleByName: state => {

			return state.people.sort( ( a, b ) => {
    			if( a.full_name < b.full_name ) return -1
    			if( a.full_name > b.full_name ) return 1
    			return 0
			})
		},

		/** Order people by company */
		peopleByCompany: state => {
			
			return state.people.sort( ( a, b ) => {
				if( a.company < b.company ) return -1
				if( a.company > b.company ) return 1
				return 0
			})
		},

		/** Return a single person */
		personById: ( state, index ) => {
			return state.people[ index ]
		}

	},

	mutations: {

		/** Add a person */
		add: ( state, person ) => {
			state.people.push( person )
		},

		/** Edit a person */
		edit: ( state, person, index ) => {
			state.people[ index ] = person
		},

		/** Remove a person */
		remove: ( state, index ) =>{
			state.people.splice( index, 1 )
		},

		/** Save state */
		save: ( state ) => {
			window.localStorage.setItem( 'testCasePeople', JSON.stringify( state.people ) )
		},

		/** Populate the store object with fetched data */
		populate: ( state, _people ) => {
			state.people = _people
		},
	},


	actions: {

		add: ( context, person ) => {
			context.commit( 'add', person )
			context.commit( 'save' )
		},

		edit: ( context, person, index ) => {
			context.commit( 'edit', person, index )
			context.commit( 'save' ) 
		},

		remove: ( context, index ) => {
			context.commit( 'remove', index )
			context.commit( 'save' )
		}, 

		populate: ( context, _people ) => {
			context.commit( 'populate', _people )
			context.commit( 'save' ) 
		}
	}

});

/**
 * Export a plugin of the store class
 */
export default {  
  store,
  install( Vue, options ) {
    Vue.prototype.$store = store
  }
}