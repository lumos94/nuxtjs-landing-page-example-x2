<template>
  <div id="termsAndConditions">
    <div class="text-center mx-5">
      <!-- hide on screens smaller than md-->
      <v-row class="mb-5">
        <v-col>
          <span class="font-size-39 font-weight-regular" v-html="$t('importantBonusTerms.title')"></span>
        </v-col>
      </v-row>
      <v-row style="max-width: 1300px" class="ma-auto">
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">1</div>
            <v-col class="d-inline important-bonus-desc text-left">{{ $t('importantBonusTerms.termOne') }}
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">2</div>
            <v-col class="d-inline important-bonus-desc text-left">
              <span v-html="$t('importantBonusTerms.termTwo')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">3</div>
            <v-col class="d-inline important-bonus-desc text-left">
              <span v-html="$t('importantBonusTerms.termThree')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">4</div>
            <v-col class="d-inline important-bonus-desc text-left">
              <span v-html="$t('importantBonusTerms.termFour')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">5</div>
            <v-col class="d-inline important-bonus-desc text-left">
              <span v-html="$t('importantBonusTerms.termFive')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">6</div>
            <v-col class="d-inline important-bonus-desc text-left"><span v-html="$t('importantBonusTerms.termSix')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 d-flex">
          <v-row class="bg-grey align-stretch">
            <div class="d-inline important-bonus-title">7</div>
            <v-col class="d-inline important-bonus-desc text-left"><span v-html="$t('importantBonusTerms.termSeven')"></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 pa-0 ma-0">
          <v-row>
            <v-col class="col-12">
              <v-row class="bg-grey step8">
                <div class="d-inline important-bonus-title">8</div>
                <v-col class="d-inline important-bonus-desc text-left">
                  <span v-html="$t('importantBonusTerms.termEight')"></span>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12">
              <v-row class="bg-grey step9">
                <div class="d-inline important-bonus-title">9</div>
                <v-col class="d-inline important-bonus-desc text-left">
                  <span v-html="$t('importantBonusTerms.termNine')"></span>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-12">
              <v-row class="bg-grey step10">
                <div class="d-inline important-bonus-title">10</div>
                <v-col class="d-inline important-bonus-desc text-left">
                    <span v-html="$t('importantBonusTerms.termTen')"></span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 d-flex">
          <span class="important-bonus-desc"> <a :href='$config.baseURL_SM + "/public/website/theme/media/documents/additional/BonusTermsAndConditions.pdf"' style="text-decoration:none" target="_blank">* {{ $t('importantBonusTerms.fullTermsAndConditions') }}</a></span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImportantBonusTerms"
};
</script>

<style scoped>
.important-bonus-title {
  color: #FFB600;
  font-size: 58px;
  padding: 12px 0px 0px 30px !important;
}

.important-bonus-desc {
  color: #333333;
  font-size: 15px;
  padding: 30px 30px 30px 10px !important;
}
</style>
