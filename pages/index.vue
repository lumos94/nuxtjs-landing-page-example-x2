<template>
<!--  <div class="bg1">-->
<!--    <v-container>-->
<!--    <v-row class="flex-row justify-center my-5 py-5">-->
<!--      <v-card-->
<!--        class="card-home d-flex justify-center"-->
<!--        :class="[suCardActive ? 'bgBlueTransparent' : 'bgWhiteTransparent']"-->
<!--        @click="[suCardActive = true, siCardActive = false]"-->
<!--        elevation="5"-->
<!--        max-width="495"-->
<!--        max-height="399"-->
<!--      >-->
<!--        <div class="align-self-center">-->
<!--          <v-card-title class="d-flex justify-center">-->
<!--            <h1 class="box-titles-h1">{{ $t('homePage.signUpTitle') }}</h1>-->
<!--          </v-card-title>-->
<!--          <div class="blueLine bgBlueLight mb-4" :class="[!suCardActive ? 'bgBlueLight' : 'white']"></div>-->
<!--          <v-card-text>-->
<!--            <p class="card-text-home text-center">-->
<!--              {{ $t('homePage.signUpSubtitle') }}-->
<!--            </p>-->
<!--          </v-card-text>-->
<!--          <v-card-actions class="justify-center">-->
<!--            <v-btn-->
<!--              width="112"-->
<!--              rounded-->
<!--              elevation="3"-->
<!--              large-->
<!--              dark-->
<!--              color="bgBlueLight"-->
<!--              :class="[!siCardActive ? 'bgBlueLight' : 'white']">-->
<!--              <nuxt-link class="nuxt-link-home" :class="[!siCardActive ? 'nuxt-link-home-normal' : 'nuxt-link-home-active']" :to="localePath('register')">{{ $t('homePage.signUpButton') }}</nuxt-link>-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </div>-->
<!--      </v-card>-->

<!--      <v-card-->
<!--        class="card-home d-flex justify-center"-->
<!--        :class="[siCardActive ? 'bgBlueLight' : '']"-->
<!--        @click="[suCardActive = false, siCardActive = true]"-->

<!--        elevation="5"-->
<!--        max-width="495"-->
<!--        max-height="399"-->
<!--      >-->
<!--        <div class="align-self-center">-->
<!--          <v-card-title class="d-flex justify-center">-->
<!--            <h1 class="box-titles-h1">{{ $t('homePage.signInTitle') }}</h1>-->
<!--          </v-card-title>-->
<!--          <div class="blueLine bgBlueLight mb-4" :class="[!siCardActive ? 'bgBlueLight' : 'white']"></div>-->
<!--          <v-card-text>-->
<!--            <p class="card-text-home text-center">-->
<!--              {{ $t('homePage.signInSubtitle') }}-->
<!--            </p>-->
<!--          </v-card-text>-->
<!--          <v-card-actions class="justify-center">-->
<!--            <v-btn-->
<!--              width="112"-->
<!--              rounded-->
<!--              elevation="3"-->
<!--              large-->
<!--              dark-->
<!--              :class="[!siCardActive ? 'bgBlueLight' : 'white']">-->
<!--              <nuxt-link class="nuxt-link-home" :class="[!siCardActive ? 'nuxt-link-home-normal' : 'nuxt-link-home-active']" :to="localePath('signin')">{{ $t('homePage.signInButton') }}</nuxt-link>-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </div>-->
<!--      </v-card>-->
<!--    </v-row>-->
<!--      </v-container>-->
<!--</div>-->
</template>

<script>

export default {
  data: () => ({
    // suCardActive: false,
    // siCardActive: true,
  })
}
</script>
<style scoped>
/*.card-home {*/
/*  width: 616px;*/
/*  height: 399px;*/
/*  !*opacity: 1;*!*/
/*}*/

/*.bg1 {*/
/*  background-image: url('static/images/backgrounds/home-page-bg.png');*/
/*  background-position: center;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background-size: cover;*/
/*}*/

/*.nuxt-link-home {*/
/*  font-size: 14px;*/
/*  font-weight: normal;*/
/*  text-decoration: none;*/
/*}*/

/*.nuxt-link-home-active {*/
/*  color: #27aae1;*/
/*}*/

/*.nuxt-link-home-normal {*/
/*  color: #FFFFFF;*/
/*}*/

/*.box-titles-h1 {*/
/*  color: #333333;*/
/*  font-weight: normal;*/
/*}*/

/*.card-text-home {*/
/*  color: #333333;*/
/*  font-size: 22px;*/
/*}*/

/*.bgBlueTransparent {*/
/*background-color: rgba(39, 170, 225, 0.5) !important;*/
/*}*/
/*.bgWhiteTransparent {*/
/*  background-color: rgba(255,255,255, 0.1) !important;*/
/*}*/
</style>
