import datePicker from './datePicker'

[datePicker].forEach((component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
    Vue.component(component.name.replace(/c|C/, 'zg'), component)
  }
})

export {
  datePicker
}
