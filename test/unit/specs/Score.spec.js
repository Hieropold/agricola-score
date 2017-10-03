import Vue from 'vue'
import Score from '@/components/Score'

describe('Score.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Score)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.score h1').textContent)
      .to.equal('Подсчет очков Агриколы')
  })
})
