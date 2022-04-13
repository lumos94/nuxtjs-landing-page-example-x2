<template>
  <div class="">
    <v-container class="px-5 px-sm-15 px-md-0 px-lg-15 my-5">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center mt-0">

          <div style="width: 100%; max-width: 700px" class="pt-5">
            <v-row>
              <v-col>
                <v-img
                  src="/logos/logo-dark-horizontal.svg"
                  alt="scopemarkets logo" class="mainLogo"
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
                      <a @click.stop="openDialog()" style="text-decoration:none" class="font-size-16 btn">*{{$t("legal.termsAndConditionsApply")}}</a>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>

        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center">
          <v-card
            elevation="10"
            id="registerForm"
            class="rounded-35"
            max-width="550"
            max-height="1000"
          >
            <v-row class="pt-10">
              <v-col
                class="d-flex justify-center">
                <img
                  src="/logos/logo-investing-black.png"
                  style="max-width:286px;width:100%"
                  class="pb-5"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <registration-form :source_url="source_url"></registration-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col>
        <divider></divider>
      </v-col>
    </v-row>

    <v-container>
      <clippedSection @openDialog="openDialog" :useDialog="true"></clippedSection>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          md="6"
          class="align-center d-none d-md-flex">
          <v-img
            src="/images/mobiles.png"
            contain/>
        </v-col>
        <v-col
          cols="12"
          md="6" class="d-flex justify-center justify-md-start">
          <simple-steps-claim-bonus/>
        </v-col>
      </v-row>
    </v-container>

    <div class="bg-grey py-10">
      <v-container>
        <why-scope-section/>
      </v-container>
    </div>
    <v-dialog v-model='importantTermsDialog'
              fullscreen
              overlay-color="white"
              transition="dialog-bottom-transition">
      <v-card>
        <v-card-title>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="importantTermsDialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>

        <important-bonus-terms></important-bonus-terms>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Landing Page 1',
      titleTemplate(title) {
        return title
      }
    }
  },
  name: "index.vue",
  data: () => ({
    source_url: 'testing.html',
    importantTermsDialog: false
  }),
  methods: {
    openDialog() {
      this.importantTermsDialog = true;
    }
  }

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
