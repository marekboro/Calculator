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

  it('can concatenate button clicks 3 4 5 to display 345', () => {
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('3');
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(345)
  })
  it('can chain multiple operations together: 3 * 5 + 7 / 11 giving 2', () => {
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick("*");
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick('7');
    wrapper.vm.operatorClick("/");
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(2)
  })

  it('can cclear the running total without affecting the calculation', () => {
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick("*");
    wrapper.vm.numberClick('5');
    wrapper.vm.clearClick();
    wrapper.vm.numberClick('7');
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(21)
  })

})
