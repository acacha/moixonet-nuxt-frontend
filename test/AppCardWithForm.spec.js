import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import AppCardWithForm from '../components/AppCardWithForm.vue'

Vue.use(Vuetify)
describe('AppCardWithForm', () => {
  let opts
  const build = (options) => {
    options = options || opts
    const wrapper = mount(AppCardWithForm, options)
    return {
      wrapper,
      cardTitle: () => wrapper.find('[data-test=card_title]'),
      cardForm: () => wrapper.find('[data-test=card_form]')
    }
  }

  beforeEach(() => {
    opts = {
      slots: {
        title: '<div class="fake-title">TITLE</div>',
        form: '<div class="fake-form">TITLE</div>'
      },
      vuetify: new Vuetify({
        mocks: {
          $vuetify: {
            breakpoint: {} // STUB BREAKPOINTS SERVICE: https://vuetifyjs.com/en/getting-started/unit-testing#mocking-vuetify
          }
        }
      })
    }
  })

  test('is a Vue instance', () => {
    const { wrapper } = build()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders the component with default slots', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders the component with slots', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Title are inserted in v-toolbar-title element', () => {
    const { cardTitle } = build()
    expect(cardTitle().findAll('.fake-title').length).toBe(1)
  })

  it('Form are inserted inside card element', () => {
    const { cardForm } = build()
    expect(cardForm().findAll('.fake-form').length).toBe(1)
  })
})
