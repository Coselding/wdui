import Vue from 'vue'
import ActionSheetComponent from './ActionSheet.vue'

const ActionSheetConstructor = Vue.extend(ActionSheetComponent)
const init = (propsData) => {
  return new ActionSheetConstructor({
    propsData
  }).$mount(document.createElement('div'))
}
const ActionSheet = (options = {}) => {
  const instance = init({
    title: options.title,
    content: options.content,
    textAlign: options.textAlign,
    isShowConfirmButton: options.isShowConfirmButton === undefined ? false : options.isShowConfirmButton,
    confirmText: options.confirmText,
    cancelText: options.cancelText
  })
  instance.value = options.open || true
  instance.onItemClick = options.onItemClick ? options.onItemClick.bind(null, instance, instance.datas) : (() => {instance.value = false})
  instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
  instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance, instance.datas) : (() => {instance.value = false})
  instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.value = false})
  instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
  instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
  document.body.appendChild(instance.$el)
  return instance
}

Vue.$ActionSheet = Vue.prototype.$ActionSheet = ActionSheet
export default ActionSheet
