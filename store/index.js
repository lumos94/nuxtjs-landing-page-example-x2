import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      country: null,
      countriesCurrencies: [],
      allCountries: [],
    }),

    mutations: {
      setCountry(state, payload) {
        state.country = payload
      },
      setCountriesCurrencies(state, payload) {
        state.countriesCurrencies = payload
      },
      setAllCountries(state, payload) {
        state.allCountries = payload
      },
    },

    actions: {
      countryRetrieve(context) {
        return this.$axios.$post('/backend/extract_country.php')
          .then(function (response) {
            if (response == null || response == "") {
              context.commit('setCountry', "CY")
              return false
            }
            context.commit('setCountry', response)
            return true
          })
      },

       async allCountries(context) {
        return await this.$axios.$get('/backend/getCountriesFromDB.php')
          .then(function (response) {
            context.commit('setAllCountries', response)
            return true
          })
      }
    },

    getters: {
      getCountry(state) {
        return state.country
      },
      getCountriesCurrencies(state) {
        return state.countriesCurrencies
      },
      getAllCountries(state) {
        return state.allCountries
      }
    },
  })
}
export default createStore

