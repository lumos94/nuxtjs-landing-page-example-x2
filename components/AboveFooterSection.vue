<template>
  <div class="text-center mx-5">
    <v-row>
      <v-col>
        <span class="font-size-26 font-weight-regular">{{ $t('aboveFooterSection.title')}}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center align-center mb-10">
        <span class="font-weight-light font-size-21" style="width:100%;max-width:760px">
          {{ $t('aboveFooterSection.description')}}
        </span>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        md="2"
        class="text-center mx-md-0">
        <div
          class="d-flex justify-center">
          <v-img
            alt="trust icon"
            src="/images/trust.png"
            contain
            max-width="65"
            max-height="65"/>
        </div>
        <br>
        <h4 class="font-weight-bold font-size-18">{{ $t('aboveFooterSection.whyOneTitle')}}</h4>
        <span>{{ $t('aboveFooterSection.whyOneDescription')}}</span>
      </v-col>

      <v-col
        cols="12"
        md="2"
        class="text-center mx-md-0">
        <div
          class="d-flex justify-center">
          <v-img
            class="ma-0"
            alt="padlock icon"
            src="/images/padlock.png"
            contain
            max-width="65"
            max-height="65"/>
        </div>
        <br>
        <h4 class="font-weight-bold font-size-18">{{ $t('aboveFooterSection.whyTwoTitle') }}</h4>
        <span>{{ $t('aboveFooterSection.whyTwoDescription')}}</span>
      </v-col>

      <v-col
        cols="12"
        md="2"
        class="text-center mx-md-0">
        <div
          class="d-flex justify-center">
          <v-img
            class="ma-0"
            alt="safe icon"
            src="/images/safe.png"
            contain
            max-width="65"
            max-height="65"/>
        </div>
        <br>
        <h4 class="font-weight-bold font-size-18">{{ $t('aboveFooterSection.whyThreeTitle')}}</h4>
        <span>{{ $t('aboveFooterSection.whyThreeDescription')}}</span>
      </v-col>

      <v-col
        cols="12"
        md="2"
        class="text-center mx-md-0">
        <div
          class="d-flex justify-center">
          <v-img
            class="ma-0"
            alt="medal icon"
            src="/images/medal.png"
            contain
            max-width="65"
            max-height="65"/>
        </div>
        <br>
        <h4 class="font-weight-bold font-size-18">{{ $t('aboveFooterSection.whyFourTitle')}}</h4>
        <span>{{ $t('aboveFooterSection.whyFourDescription')}}</span>
      </v-col>

      <v-col
        cols="12"
        md="2"
        class="text-center mx-md-0">
        <div
          class="d-flex justify-center">
          <v-img
            class="ma-0"
            alt="customer service icon"
            src="/images/customer-service.png"
            contain
            max-width="65"
            max-height="65"/>
        </div>
        <br>
        <h4 class="font-weight-bold font-size-18">{{ $t('aboveFooterSection.whyFiveTitle')}}</h4>
        <span>{{ $t('aboveFooterSection.whyFiveDescription')}}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboveFooterSection"
}
</script>

<style scoped>

</style>
