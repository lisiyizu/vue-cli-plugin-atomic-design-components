import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VList from '.'

const wrapper = {
  components: { VList }
}

storiesOf('Atom - VList', module)
  .addDecorator(withInfo)
  .add('unorderd', () => ({
    ...wrapper,
    template: `
      <VList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </VList>
    `
  }), { info: true })
  .add('ordered', () => ({
    ...wrapper,
    template: `
      <VList ordered>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </VList>
    `
  }), { info: true })
