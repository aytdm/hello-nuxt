
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TopPage from '~/pages/index.vue'

describe('TopPage', () => {
  test('able to render HTML', () => {
    const wrapper = shallowMount(TopPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.container').isVisible()).toBeTruthy()
  })
})
