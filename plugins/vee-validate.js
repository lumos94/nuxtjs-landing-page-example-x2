import Vue from 'vue'
import {ValidationObserver, ValidationProvider, extend, configure} from 'vee-validate'
import {required, email, min, alpha, alpha_spaces, max, numeric, regex} from 'vee-validate/dist/rules'

//https://codesandbox.io/s/9vs4l

// extend('required', {
//   ...required,  // copies rule configuration
//     message: field => field + ' is required' // assign message
// // })
// extend('alpha', {
//   ...alpha,  // copies rule configuration
//   message: "Only alphabetic characters are allowed" // assign message
// })
//
// extend('alpha_spaces', {
//   ...alpha_spaces,  // copies rule configuration
//   message: 'Only alphabetic characters and spaces are allowed' // assign message
// })
//
//
// extend('max', {
//   ...max,
//   // params: ['max'],
//   message: (fieldName, placeholders) => {
//     return `The ${fieldName} should not be more than ${placeholders.length} characters`;
//   }
//   // field => field + ' should not be more than ' + length +  ' characters'
// })

extend('required', required)
extend('email', email)
extend('min', min)
extend('numeric', numeric)
extend('alpha', alpha)
extend('alpha_spaces', alpha_spaces)
extend('max', max)
extend('regex', regex)
// extend("included", included)

//custom rule for acceptable countries
export default function VeeValidatePlugin({app}) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.messages.${values._rule_}`, values)
  });


  extend('included', {
    message: (_, values) => app.i18n.t('validations.messages.included', values),
    validate: (value, placeholders) => {
      return placeholders.includes(value.toUpperCase())
    }
  })

  extend('regex', {
    ...regex,
    message: (_, values) => app.i18n.t('validations.messages.regex', values),
  })
}

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
