import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

/**
 * Create the store class
 */
const store = new Vuex.Store({

	state: {
		people: {},
		count: 10
	},

	mutations: {

		add( person ) {

		},

		edit( person, index ) {

		},

		remove( index ) {

		}
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