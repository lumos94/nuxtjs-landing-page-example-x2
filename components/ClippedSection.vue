<template>
  <div class="clipped pa-10 my-5 my-sm-10 d-flex align-center">
    <v-row>
      <v-col
        class="d-flex align-center my-5"
        cols="12"
        md="7"
        style="max-width: 90%">
              <span class="font-size-34 text-light text-center text-md-left">
                <span v-html="$t('clippedSection.mainText')"/>
                </span>
      </v-col>
      <v-col
        cols="12"
        md="5"
        class="d-flex justify-center align-center">
        <div class="text-center">
          <v-btn
            class="mr-md-15 px-2 px-sm-15 px-md-3 px-lg-10 py-2 py-sm-10 mb-sm-3 font-size-21 font-weight-regular"
            color="primary"
            depressed
            large
            href="#registerForm">
            {{$t("ctaButtons.startTradingNowButton")}}
          </v-btn>
          <br>
          <span class="mr-md-15 caption text-center text-light">
            <a v-if="useDialog" @click.stop="showPopupWithText" class="font-size-16" style="color: white;text-decoration:none">*{{$t("legal.termsAndConditionsApply")}}</a>
            <a v-else href="#termsAndConditions" class="font-size-16" style="color: white;text-decoration:none">*{{$t("legal.termsAndConditionsApply")}}</a>
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ClippedSection",
  props:{
    useDialog: Boolean
  },
  methods: {
    async showPopupWithText() {
        this.$emit('openDialog')
    }
  }
}
</script>

<style scoped>

.clipped {
  background-color: #082A47;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 0 50%, 0 0);
}

</style>
