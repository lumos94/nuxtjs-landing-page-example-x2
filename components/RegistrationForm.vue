<template>
  <div class="pb-10 pb-sm-5 px-0 px-sm-13 px-md-7 px-lg-13">
    <loading-spinner
      v-show="showSpinner"></loading-spinner>

    <v-row>
      <v-col
        cols="12"
        align="center">
        <div class="myTitle">
          <h2 class="font-weight-bold">{{ $t('register.titlePage') }}</h2>
          <div class="bgBlueLight blueLine mb-7 ma-0 mt-2"></div>
        </div>
      </v-col>
    </v-row>

    <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit  }">
      <v-form
        ref="form"
        id="registerForm"
        @submit.prevent="handleSubmit(submit)">
        <v-row>
          <v-col
            cols="12">
            <ValidationProvider :name="$t('register.name')" rules="required|alpha_spaces|max:15" v-slot="{ errors }">
              <v-text-field
                :label="$t('register.name')"
                placeholder=" "
                persistent-placeholder
                v-model="firstname"
                autocomplete="false"
                outlined
                dense
                :error-messages="errors"
                :counter="15"
                clearable
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col
            cols="12">
            <ValidationProvider :name="$t('register.lastName')" rules="required|alpha_spaces|max:20" v-slot="{ errors }">
              <v-text-field
                v-model="lastname"
                placeholder=" "
                persistent-placeholder
                autocomplete="false"
                :counter="20"
                :label="$t('register.lastName')"
                :error-messages="errors"
                outlined
                dense
                clearable
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12">
            <ValidationProvider :name="$t('register.email')" rules="required|email" v-slot="{ errors }">
              <v-text-field
                v-model="email"
                placeholder=" "
                persistent-placeholder
                autocomplete="false"
                :label="$t('register.email')"
                :error-messages="errors"
                outlined
                dense
                clearable
                required
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>

        <telephone-country :countryIP="country" :currentCountry="country" :allCountries="allCountries" @setPhoneDetails="setPhoneDetails"/>

        <v-row>
          <v-col
            cols="12">
            <ValidationProvider :name="$t('register.password')" :rules="{required:true, regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@\(\)##\$%_]{8,}$/, min:8, max:16}" v-slot="{ errors }" id="password">
              <v-text-field
                :label="$t('register.password')"
                placeholder=" "
                persistent-placeholder
                :type="passwordShow ? 'text' : 'password'"
                @click:append="passwordShow = !passwordShow"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :error-messages="errors"
                outlined
                dense
                v-model="password"
                autocomplete="false"
                counter
                clearable
                single-line
                persistent-hint
                :hint="$t('register.passwordHint')"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12">
            <ValidationProvider :name="$t('legal.termsAndConditions')" :rules="{ required: { allowFalse: false } }" v-slot="{ errors }" id="agree-terms">
              <v-checkbox
                v-model="tac"
                :error-messages="errors"
                :hint="$t('register.marketing_agreement')"
                persistent-hint
                required>
                <template v-slot:label>
                  <div class="subtitle-2">
                    <i18n
                      path="register.tac"
                    >
                      <template #termsAndConditions>
                        <a
                          v-text="$t('legal.termsAndConditions')"
                          target='_blank'
                          :href="$config.baseURL + ''"
                          @click.stop
                        />
                      </template>

                      <template #document3>
                        <a
                          v-text="$t('legal.document3')"
                          target='_blank'
                          :href='$config.baseURL + ""'
                          @click.stop
                        />
                      </template>

                      <template #document4>
                        <a
                          v-text="$t('legal.document4')"
                          target='_blank'
                          :href='$config.baseURL + ""'
                          @click.stop
                        />
                      </template>
                    </i18n>
                  </div>
                </template>
                <br>
                <template v-slot:message>
                  <div class="pl-5">
                    <span class="text-muted caption font-italic"> {{ $t('register.marketing_agreement') }}</span>
                  </div>
                </template>
              </v-checkbox>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-btn
              class="py-2 py-sm-8 my-3 px-15 font-size-18"
              color="primary"
              depressed
              type="submit">
              {{ $t("register.submit") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </ValidationObserver>
    <result-dialog
      :showResultDialog.sync="showResultDialog"
      :dialogTitle="dialogTitle"
      :dialogMessage="dialogMessage"/>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  props: {
    source_url: String
  },
  data: () => ({
    phone: "",
    phoneCountryISO: '',
    phonePrefix: '',
    allCountries: [],
    country: null,
    remote_country: '', //initial country from IP
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    userIP: '',
    tac: false,
    currency: '',
    agreement_id_list: '',
    passwordShow: false,
    urlParams: [],
    // acceptableCountries: [],
    showSpinner: false,
    showResultDialog: false,
    dialogMessage: '',
    dialogTitle: '',
    marketing_agreement: true,
    tryCount: 0,
    initialUrlParams: '',
  }),

  methods: {
    async submit() {
      this.showSpinner = true

      if (this.getCookie("custom_cookie") !== "") {
        let newURLquery = this.initialUrlParams
        this.urlParams = JSON.parse(this.getCookie("custom_cookie"));
      }

      let register = {
        fname: this.firstname,
        lname: this.lastname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        phoneCode: this.phonePrefix,
        phoneCountryCode: this.phoneCountryISO,
        nationalityCountryCode: this.country,
        currency: 'USD',
        termsAndConditions: this.tac,
        remote_country: this.remote_country,
        client_ip: this.userIP,
        apikey: this.$config.API_KEY,
        locale: this.$i18n.localeProperties.code,
        source_url: this.source_url
      }
      //assigning cookies values to the register object
      Object.assign(register, this.urlParams)

      this.$axiosRegistration.$post("", register)
        .then((response) => {
          let client_id;
          client_id = response.data.client_id;
          this.longPoll(client_id);
        })
        .catch(() => {
          this.showSpinner = false
          this.showResultDialog = true
          this.dialogTitle = this.$i18n.t("resultDialog.errorTitle")
          this.dialogMessage = this.$i18n.t("resultDialog.connectionFailedMessage")
        })
    },
    async longPoll(client_id) {

      await this.$axiosValidation.$post("", {client_id: client_id, locale: this.$i18n.localeProperties.code})
        .then((response) => {
          if (response.success) {
            this.tryCount = 0
            this.showSpinner = false
            this.showResultDialog = true
            this.dialogTitle = this.$i18n.t("resultDialog.successTitle")
            this.dialogMessage = this.$i18n.t("resultDialog.successMessage")

            //automatically signin user after registration
            this.$axios.$post('/backend/signinUser.php', {email: this.email, password: this.password})
              .then(response => {
                if (response["success"]) {
                  window.location.replace(response["url"]);
                }
              })
          }
        })
        .catch((error) => {
          const retryLimit = 10;
          this.tryCount++;
          if (error.response.status === 404) {
            if (this.tryCount <= retryLimit) {
              //try again
              setTimeout(() => {
                this.longPoll(client_id)
              }, 1000);
              return;
            }
          }

          this.tryCount = 0
          this.showSpinner = false
          this.showResultDialog = true
          this.dialogTitle = this.$i18n.t("resultDialog.errorTitle")

          //https://github.com/axios/axios#handling-errors
          if (typeof error.response.data.errors !== 'undefined') {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data.errors[0]);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            this.dialogMessage = error.response.data.errors[0]
          } else {
            this.dialogMessage = this.$i18n.t("resultDialog.issueWithRegistration")
          }
        })
    },
    //create custom cookie
    async setCookies() {
      const urlSearchParams = new URLSearchParams(window.location.search);
      let parameters = Object.fromEntries(urlSearchParams.entries());
      if (parameters !== '') {
        await this.$axios.$post('/backend/cookie_creator.php', JSON.stringify(parameters))
      }
    },

    //get custom cookie
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },

    async getUrlParams() {
      const urlSearchParams = new URLSearchParams(window.location.search);
      this.initialUrlParams = Object.fromEntries(urlSearchParams.entries());
    },

    setPhoneDetails(iso2, phone_prefix, telNumber) {
      this.phone = telNumber;
      this.phoneCountryISO = iso2;
      this.phonePrefix = "+" + phone_prefix;
    }
  },

  mounted() {
    this.setCookies();
    this.getUrlParams();
    this.urlParams = this.initialUrlParams
  },

  async created() {
    await this.$store.dispatch('allCountries').then(response => {
      this.allCountries = this.$store.getters['getAllCountries'];
      this.currency = this.$store.getters["getAllCountries"].currency;
    })

    this.$store.dispatch('countryRetrieve').then(response => {
      response ? this.country = this.$store.getters['getCountry'] : this.country = "CY";
      response ? this.remote_country = this.$store.getters['getCountry'] : this.remote_country = "CY";
      response ? this.phoneCountryISO = this.$store.getters['getCountry'] : this.phoneCountryISO = "CY";
    })
  },
}
</script>

<style scoped>
#registerForm .row {
  margin-bottom: -31px;
}

/deep/ #registerForm .col {
  padding-top: 0px;
  padding-bottom: 0px;
}

/deep/ #registerForm .v-input__slot {
  background-color: #F6F6F6;
}

/deep/ #registerForm #agree-terms .v-input__slot {
  background-color: white;
}

/deep/ #registerForm .v-counter {
  position: absolute;
  right: 12px;
  top: 13px;
}

/deep/ #password .v-counter,
/deep/ .v-input__icon.v-input__icon--clear {
  display: none !important;
}

/deep/ #phone-prefix fieldset {
  border-radius: 5px 0 0 5px;
  border-right-style: none;
}

/deep/ #phone fieldset {
  border-radius: 0 5px 5px 0;
  border-left-style: none;
}

/deep/ #registerForm .phone-prefix {
  max-width: 125px !important;
}

/*XS SCREEN*/
@media (max-width: 599px) {
  /deep/ #registerForm .col {
    padding: 0px !important;
  }

  /deep/ #phone-prefix fieldset {
    border-radius: 5px 5px 5px 5px;
    border-right-style: solid;
  }

  /deep/ #phone fieldset {
    border-radius: 5px 5px 5px 5px;
    border-left-style: solid;
  }

  #registerForm {
    width: 100% !important;
    max-width: 500px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    margin: auto;
  }

  /deep/ #registerForm .phone-prefix {
    flex: 0 0 100% !important;
    max-width: none !important;
  }
}

/*SM SCREEN*/
@media (min-width: 600px) and (max-width: 959px) {
  /deep/ #registerForm .col {
    padding: 0px !important;
  }

  #registerForm {
    width: 100% !important;
    max-width: 500px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    margin: auto;
  }
}

/*MD SCREEN*/
@media (min-width: 960px) and (max-width: 1263px) {
  /deep/ #registerForm .col {
    padding: 0px !important;
  }

  #registerForm {
    width: 100% !important;
    max-width: 500px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    margin: auto;
  }
}

/*LG SCREEN*/
@media (min-width: 1264px) and (max-width: 1903px) {
  /deep/ #registerForm .phone-prefix {
    max-width: 137px !important;
  }
}

/*XL SCREEN*/
@media (min-width: 1903px) {
  /deep/ #registerForm .phone-prefix {
    max-width: 137px !important;
  }
}
</style>
