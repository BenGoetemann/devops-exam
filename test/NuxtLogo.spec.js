import {
  mount
} from '@vue/test-utils'
import QuoteContainer from '@/components/QuoteContainer.vue'

describe('QuoteContainer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(QuoteContainer)
    expect(wrapper.vm).toBeTruthy()
  })
})
