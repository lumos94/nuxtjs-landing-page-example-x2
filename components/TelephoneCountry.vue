<template>
  <v-row>
    <v-col class="col-12 pa-0">
      <v-row>
        <v-col class="pr-sm-0 d-sm-inline phone-prefix">
          <ValidationProvider :name="$t('register.prefix')" rules="required" v-slot="{ errors }" id="phone-prefix">
            <v-select
              v-model="phoneIso"
              :items="allCountries"
              item-text="name"
              placeholder=" "
              persistent-placeholder
              return-object
              @change="setPhoneDetails()"
              item-value="dialCode"
              :hint="$t('register.prefix')"
              outlined
              dense
            >
              <template v-slot:item="slotProps">
                <i :class="['mr-2','em', 'em-flag-' + slotProps.item.iso2.toLowerCase()]"/>
                <span> {{ slotProps.item.name }} {{ '+' + slotProps.item.phone_prefix }} </span>
              </template>


              <template v-slot:selection>
                <div class="row">
                  <div>
                    <i :class="['em', 'em-flag-' + phoneIso.iso2.toLowerCase()]"/>
                    {{ "+" + phoneIso.phone_prefix }}
                  </div>
                </div>
              </template>
            </v-select>
          </ValidationProvider>
        </v-col>

        <v-col class="pl-sm-0 d-sm-inline tel-input">
          <ValidationProvider :name="$t('register.phone')" rules="required|numeric|max:20|min:6" v-slot="{ errors }" id="phone">
            <v-text-field
              :label="$t('register.phone')"
              :placeholder="$t('register.phone')"
              persistent-placeholder
              :error-messages="errors"
              v-model="phone"
              autocomplete="false"
              counter
              @change="setPhoneDetails()"
              class="tel-input-i"
              outlined
              dense
              clearable
              single-line
            ></v-text-field>
          </ValidationProvider>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TelephoneCountry",
  props: {
    allCountries: Array,
    currentCountry: String,
    countryIP: String,
  },
  data: () => ({
    phone: '',
    phoneIso: ''
  }),
  watch: {
    currentCountry() {
      this.phoneIso = this.allCountries.filter(country => country.iso2 === this.currentCountry)[0]
    }
  },
  mounted() {
    this.$store.dispatch('countryRetrieve').then(response => {
      if (response){
         this.phoneIso = this.allCountries.filter(country => country.iso2 === this.$store.getters['getCountry'])[0]
      } else {
        this.phoneIso = {
          iso2: 'CY',
          phone_prefix: '357'
        }
      }

    })
  },
  methods: {
    setPhoneDetails() {
      this.$emit('setPhoneDetails', this.phoneIso.iso2, this.phoneIso.phone_prefix, this.phone)
    }

  }
}
</script>

<style scoped>
.custom-dropdown-tel {

}

.tel-input-i {
  width: 100%;

}
</style>
