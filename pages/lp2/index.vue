<template>
  <div class="">
    <v-container class="px-5 px-sm-15 px-md-0 px-lg-15 my-5">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center mt-0 mt-md-10">

          <div style="width: 100%; max-width: 745px" class="pt-5">
            <v-row>
              <v-col>
                <v-img
                  src="/logos/logo-dark-horizontal.svg"
                  alt="logo" class="mainLogo"
                  contain/>
              </v-col>
            </v-row>

            <v-row class="mt-5 mt-md-15">
              <v-col>
                <h1 class="font-size-67 font-weight-medium">
                  <span v-html="$t('firstSection.header')"></span>
                </h1>

                <h3 class="font-weight-regular font-size-26">
                  <span v-html="$t('firstSection.subheader')"></span>
                </h3>
                <v-row class="mt-4">
                  <v-col class="d-flex justify-center justify-md-start">
                    <div class="text-center">
                      <v-btn
                        class="my-3 py-8 py-md-10 px-4 px-sm-10 font-weight-regular font-size-21"
                        color="primary"
                        depressed
                        href="#registerForm">
                        <span v-html="$t('ctaButtons.startTradingNowButton')"></span>
                      </v-btn>
                      <br>
                      <span class="caption text-center">{{$t("firstSection.minDepositDisclaimer")}}*</span>
                      <br>
                      <a href="#termsAndConditions" style="text-decoration:none" class="font-size-16">*{{$t("legal.termsAndConditionsApply")}}</a>

                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col
          md="6"
          class="align-center d-none d-md-flex">
          <v-img
            src="/images/steps.png"
            contain/>
        </v-col>

      </v-row>
    </v-container>

    <v-row>
      <v-col>
        <divider></divider>
      </v-col>
    </v-row>

    <v-container>
      <clippedSection :useDialog="false"></clippedSection>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center">
          <v-card
            elevation="10"
            id="registerForm"
            class="rounded-35 px-0"
            max-width="550"
            max-height="1000"
          >
            <v-row class="pt-10">
              <v-col>
                <registration-form :source_url="source_url"></registration-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6" class="d-flex justify-center justify-md-start">
          <steps-section/>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <v-container>
        <popup-box-with-text/>
      </v-container>
    </div>

    <div class="py-10">
      <v-container>
        <above-footer-section />
      </v-container>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Landing Page 2',
      titleTemplate(title) {
        return title
      }
    }
  },
  name: "index.vue",
  data: () => ({
    source_url: 'page url'
  })

}
</script>

<style scoped>

.myTitle {
  margin-right: 95px
}

/* cards' css */
#outer {
  position: relative;
  margin-bottom: 30px;
}

#inner {
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translate(50%, -50%);
  left: -400px;
}

</style>
