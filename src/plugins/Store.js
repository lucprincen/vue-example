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
			state.people[ index ] = person;
		},

		/** Remove a person */
		remove: ( state, index ) =>{
			state.people.splice( index, 1 )
		},

		/** Populate the store object with fetched data */
		populate: ( state, _people ) => {
			state.people = _people
		},
	}

});

/**
 * Export a plugin of the store class
 */
export default {  
  store,
  install (Vue, options) {
    Vue.prototype.$store = store
  }
}