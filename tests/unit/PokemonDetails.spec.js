import PokemonDetails from '@/components/PokemonDetails.vue'
import { mount } from '@vue/test-utils'

describe('PokemonDetails', () => {
  const mocks = {
    $route: { params: { id: 3 } }
  }

  const stubs = {
    'BaseImage': '<div data-stub-base-image v-bind="$attrs"></div>'
  }

  test('snapshot', () => {
    const wrapper = mount(PokemonDetails, {
      propsData: {
        id: 3
      },
      mocks,
      stubs
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.name').text()).toBe('Venusaur')
  })

  test('snapshot: pokemon not found', () => {
    const wrapper = mount(PokemonDetails, {
      propsData: {
        id: 'foo'
      },
      mocks,
      stubs
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.empty').text()).toBe('Pokemon not found')
  })

  test('event: toggle-favorite', () => {
    const wrapper = mount(PokemonDetails, {
      propsData: {
        id: 2
      },
      mocks,
      stubs
    })
    wrapper.find('.toggle-favorite').trigger('click')
    // L'événement a été appelé une fois
    expect(wrapper.emitted('toggle-favorite')).toBeTruthy()
    // L'argument en paramètre était 2
    expect(wrapper.emitted('toggle-favorite')[0]).toEqual([2])
  })
})
