<template>
  <div class="mb-5" style="max-width: 574px;">
    <v-row class="mb-5">
      <v-col class="text-left">
        <span class="font-size-42">
          {{ $t('stepsSection.title')}}
        </span>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col
        class="col-3 pr-3"
        align="right">
        <v-img
          src="/images/step1-img.png"
          max-width="106"
          max-height="106"
          alt="icons for registration steps"
          contain/>
      </v-col>
      <v-col
        class="col-9 col-lg-6 align-self-center pl-3 pl-3">
        <span class="font-size-27 font-weight-bold">{{ $t('stepsSection.stepOneTitle')}}</span>
        <br>
        <span class="font-weight-regular font-size-18 line-height-2">
          {{ $t('stepsSection.stepOneText')}}</span>
      </v-col>
    </v-row>

    <v-row class="d-flex align-center mb-5">
      <v-col
        class="col-3 pr-3"
        align="right">
        <v-img
          src="/images/step2-img.png"
          max-width="106"
          max-height="106"
          alt="icons for registration steps"
          contain/>
      </v-col>
      <v-col
        class="col-9 col-lg-6 align-self-center pl-3">
        <span class="font-size-27 font-weight-bold">{{ $t('stepsSection.stepTwoTitle') }}</span>
        <br>
        <span class="font-weight-regular font-size-18 line-height-2">
          {{ $t('stepsSection.stepTwoText') }}
        </span>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col
        class="col-3 pr-3"
        align="right">
        <v-img
          src="/images/step3-img.png"
          max-width="106"
          max-height="106"
          alt="icons for registration steps"
          contain/>
      </v-col>
      <v-col
        class="col-9 col-lg-6 align-self-center pl-3">
        <span class="font-size-27 font-weight-bold">{{ $t('stepsSection.stepThreeTitle') }}</span>
        <br>
        <span class="font-weight-regular font-size-18 line-height-2">
          {{ $t('stepsSection.stepThreeText') }}
        </span>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col
        class="col-3 pr-3"
        align="right">
        <v-img
          src="/images/step4-img.png"
          max-width="106"
          max-height="106"
          alt="icons for registration steps"
          contain/>
      </v-col>
      <v-col
        class="col-9 col-lg-6 align-self-center pl-3">
        <span class="font-size-27 font-weight-bold">{{ $t('stepsSection.stepFourTitle') }}</span>
        <br>
        <span class="font-weight-regular font-size-18 line-height-2">{{ $t('stepsSection.stepFourText') }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "StepsSection"
}
</script>

<style scoped>
.line-height-2 {
  line-height: 2;
}

@media (min-width: 1264px) {
  .col-lg-6 {
      flex: none;
      max-width: 400px;
  }
}

.zero-margin-right {
  /*margin-right: -50px;*/
}
</style>
