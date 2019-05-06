import PokemonDetails from '@/components/PokemonDetails.vue'
import { mount } from '@vue/test-utils'

const pokemon = {
  id: '46',
  name: 'paras',
  __typename: 'Pokemon',
  hp: 35,
  attack: 70,
  defense: 55,
  types: [
    { id: 'bug', __typename: 'PokemonType' },
    { id: 'grass', __typename: 'PokemonType' }
  ]
}

describe('PokemonDetails', () => {
  const mocks = {
    $route: { params: { id: 46 } },
    $apollo: { loading: false }
  }

  const stubs = {
    'BaseImage': '<div data-stub-base-image v-bind="$attrs"></div>'
  }

  test('snapshot', () => {
    const wrapper = mount(PokemonDetails, {
      propsData: {
        id: 46
      },
      data: () => ({
        pokemon
      }),
      mocks,
      stubs
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.name').text()).toBe('paras')
  })

  test('snapshot: pokemon not found', () => {
    const wrapper = mount(PokemonDetails, {
      propsData: {
        id: 'foo'
      },
      data: () => ({
        pokemon: null
      }),
      mocks,
      stubs
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.empty').text()).toBe('Pokemon not found')
  })

  test('event: toggle-favorite', () => {
    const wrapper = mount(PokemonDetails, {
      propsData: {
        id: 46
      },
      data: () => ({
        pokemon
      }),
      mocks,
      stubs
    })
    wrapper.find('.toggle-favorite').trigger('click')
    // L'événement a été appelé une fois
    expect(wrapper.emitted('toggle-favorite')).toBeTruthy()
    // L'argument en paramètre était 2
    expect(wrapper.emitted('toggle-favorite')[0]).toEqual([46])
  })
})
