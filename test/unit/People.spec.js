import Vue from 'vue'
import People from '../../src/components/People.vue'

describe('People.vue', () => {
  
  it('has a created function', () => {
  	expect( typeof People.created ).toBe( 'function' );
  });

  it('sets default data', () => {
  	expect(typeof People.data).toBe('function')
    const defaultData = People.data()
    expect(defaultData.people).toEqual({})
    expect(defaultData.dataSet).toBe(false)
  })

  it('has a fetch method', () => {
  	expect( typeof People.methods.fetch ).toBe( 'function' );
  })

});