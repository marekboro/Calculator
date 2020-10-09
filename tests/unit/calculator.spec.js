import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'


let wrapper;
beforeEach(() => {
  wrapper = shallowMount(App);
})

describe('App.vue', () => {
  it('enterNum changes running total', () => {
  
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
  it('can subtract 4 from 7 to get 3', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })


})
