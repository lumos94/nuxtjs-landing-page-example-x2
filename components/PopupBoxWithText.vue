<template>
  <div id="termsAndConditions">
    <div class="text-center mx-5">
      <!-- hide on screens smaller than md-->
      <v-row class="mb-5">
        <v-col>
          <span class="font-size-39 font-weight-regular" v-html="$t('popupBoxWithText.title')"></span>
        </v-col>
      </v-row>
      <v-row style="max-width: 1300px" class="ma-auto">
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">1</div>
            <v-col class="d-inline text-desc text-left">{{ $t('popupBoxWithText.termOne') }}
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">2</div>
            <v-col class="d-inline text-desc text-left">
              <span v-html="$t('popupBoxWithText.termTwo')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">3</div>
            <v-col class="d-inline text-desc text-left">
              <span v-html="$t('popupBoxWithText.termThree')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">4</div>
            <v-col class="d-inline text-desc text-left">
              <span v-html="$t('popupBoxWithText.termFour')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">5</div>
            <v-col class="d-inline text-desc text-left">
              <span v-html="$t('popupBoxWithText.termFive')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">6</div>
            <v-col class="d-inline text-desc text-left"><span v-html="$t('popupBoxWithText.termSix')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline text-title">7</div>
            <v-col class="d-inline text-desc text-left"><span v-html="$t('popupBoxWithText.termSeven')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 pa-0 ma-0">
          <v-row>
            <v-col class="col-12">
              <v-row class="bg-grey step8">
                <div class="d-inline text-title">8</div>
                <v-col class="d-inline text-desc text-left">
                  <span v-html="$t('popupBoxWithText.termEight')"></span>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12">
              <v-row class="bg-grey step9">
                <div class="d-inline text-title">9</div>
                <v-col class="d-inline text-desc text-left">
                  <span v-html="$t('popupBoxWithText.termNine')"></span>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12">
              <v-row class="bg-grey step10">
                <div class="d-inline text-title">10</div>
                <v-col class="d-inline text-desc text-left">
                    <span v-html="$t('popupBoxWithText.termTen')"></span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 d-flex">
          <span class="text-desc"> <a :href='$config.baseURL + ""' style="text-decoration:none" target="_blank">* {{ $t('popupBoxWithText.fullTermsAndConditions') }}</a></span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupBoxWithText"
};
</script>

<style scoped>
.text-title {
  color: #FFB600;
  font-size: 58px;
  padding: 12px 0px 0px 30px !important;
}

.text-desc {
  color: #333333;
  font-size: 15px;
  padding: 30px 30px 30px 10px !important;
}
</style>
