<template>
  <div class="container-header pb-3">
    <div class="header">
      <v-row>
        <v-col col="12">
          <div class="d-flex justify-end pa-5 language-div">
            <v-menu offset-y
                    open-on-hover
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="color: #333333"
                  dark
                  small
                  fab
                  ripple
                  retain-focus-on-click
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="white">
                    mdi-earth
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <div
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    class="bgBlue-hover text-color-hover">
                    <nuxt-link
                        class="text-decoration-none text-color-hover"
                        :to="switchLocalePath(locale.code)">
                        <v-list-item class="text-color-hover">
                          <v-list-item-title>
                            {{ locale.name }}
                          </v-list-item-title>
                        </v-list-item>
                  </nuxt-link>
                </div>
              </v-list>
            </v-menu>

          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols='12'
          class="d-flex justify-center">
          <!--          <div class="text-center">-->
          <nuxt-link :to="localePath('/')">
            <v-img
              id="header-logo"
              src="/logos/logo-white-square.png"/>
          </nuxt-link>
          <!--          </div>-->
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style scoped>
.header {
  /*background: url('/images/backgrounds/bz-banner.png') no-repeat center;*/
  /*background-size: cover;*/
  /*top: 0;*/
  /*left: 0;*/
  /*width: 1280px;*/
  height: 240px;
}

#header-logo {
  /*top: 64px;*/
  width: 224px;
  height: 112px;
}

.language-div {
  max-height: 50px;
}

.text-decoration-none {
  text-decoration: none;
}

.bgBlue-hover:hover {
  background-color: #27aae1;
}

.text-color-hover:hover {
  color: white;
}
</style>
