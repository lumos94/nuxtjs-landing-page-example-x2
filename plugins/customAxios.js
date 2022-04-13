//https://github.com/nuxt-community/axios-module/issues/421
export default function ({$axios, $config: {LEMA_URL, baseURL_SM}}, inject) {
  // Create a custom axios instance for registration
  const lemaRegistration = $axios.create({
    headers: {
      'X-Requested-With': 'xmlhttprequest',
    }
  })

  // Create a custom axios instance for validate
  const lemaValidate = $axios.create({
    headers: {
      'X-Requested-With': 'xmlhttprequest',
    },
  })

  // Create a custom axios instance for validate
  const smBZWebsite = $axios.create({
    headers: {
      'X-Requested-With': 'xmlhttprequest',
      // 'Access-Control-Allow-Origin': '*',
      // // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS',
      // 'Access-Control-Max-Age': '86400'
    },
  })

  // Set baseURL to something different
  lemaRegistration.setBaseURL(`${LEMA_URL}/api/registration`)

  // Set baseURL to something different
  lemaValidate.setBaseURL(`${LEMA_URL}/api/registration/validatelead`)

  // Set baseURL to something different
  smBZWebsite.setBaseURL(`${baseURL_SM}`)

  // Inject to context as $firebase
  inject('axiosValidation', lemaValidate)
  inject('axiosRegistration', lemaRegistration)
  inject('smBZWebsiteAxios', smBZWebsite)
}
