import Vue from 'vue'
import People from '../../src/components/People.vue'
import Vuex from 'vuex'  
import Store from '../../src/plugins/Store'

Vue.use(Vuex)
Vue.use(Store)

window.axios = require('axios');


/**
 * Unit tests
 * 
 */
describe('People.vue', () => {
  
  it('has a created function', () => {
  	expect( typeof People.created ).toBe( 'function' );
  });

  it('has a populatePeople method', () => {
  	expect( typeof People.methods.populatePeople ).toBe( 'function' );
  })

  it('should load the people', () => {
    
    let Constructor = Vue.extend( People );
    let people = new Constructor();

    people.$mount();
    expect( people.peopleCount ).toBe( '0 people');

    people.populatePeople

    Vue.nextTick( () => {
      console.log( people );
      expect( people.peopleCount ).not.to.be( '0 people' );
    })

/*    
    people.populatePeople();

    Vue.nextTick( () => {
      expect( people.peopleCount ).toNotBe( '0 people')
    });
*/
  })

});