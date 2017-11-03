export default {
  name: 'q-carousel-control',
  props: {
    position: {
      type: String,
      default: 'bottom-right'
    },
    offset: {
      type: Array,
      default: () => [0, 0]
    }
  },
  computed: {
    computedClass () {
      return `absolute-${this.position}`
    },
    computedStyle () {
      return {
        margin: `${this.offset[1]}px ${this.offset[0]}px`
      }
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'q-carousel-control absolute',
      style: this.computedStyle,
      'class': this.computedClass
    }, this.$slots.default)
  }
}