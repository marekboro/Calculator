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

  it('can add 1 to 4 to get 5', () => {
    wrapper.vm.previousTotal = 4;
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
  
  it('can subtract 4 from 7 to get 3', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('can multiply 3 by 5 to get 15', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('can divide 21 by 7 to get 3', () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

})
