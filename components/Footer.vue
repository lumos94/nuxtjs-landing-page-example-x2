<template>
  <div style="width:100%">
    <v-row>
      <v-container>
        <v-col>
          <v-row>
            <v-col>
                <v-img
                    src="/logos/logo-light-horizontal.svg"
                    alt="logo" class="mainLogo"
                    width="320" />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12">
              <p
                class="text-light footerSize">
                <strong>{{ $t('footer.legalInformation') }}</strong>
                <br>
                {{ $t('footer.legalInformationText') }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12">
              <p
                class="text-light footerSize">
                <strong>{{ $t('footer.document1') }}</strong>
                <br>
                <i18n
                  path="footer.document1Text"
                >
                  <template #document1>
                    <a
                      v-text="$t('legal.document1')"
                      target='_blank'
                      class="text-light"
                      :href='$config.baseURL + ""'
                    />
                  </template>
                </i18n>
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12">
              <p
                class="text-light footerSize">
                <strong>{{ $t('footer.document2') }}</strong>
                <br>
                <i18n
                  path="footer.document2Text"
                >
                  <template #document2>
                    <a
                      v-text="$t('legal.document2')"
                      target='_blank'
                      class="text-light"
                      :href='$config.baseURL + ""'
                    />
                  </template>
                </i18n>
              </p>
            </v-col>
          </v-row>

          <v-row
            class="mt-4">
            <v-col
              cols="12">
              <p class="text-light footerSize">
                <i18n
                  path="footer.document3Text"
                >
                  <template #document3>
                    <a
                      v-text="$t('legal.document3')"
                      target='_blank'
                      class="text-light"
                      :href='$config.baseURL + ""'
                    />
                  </template>
                </i18n>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </v-row>
    <div class="darkBgGrey">
      <v-row class="mx-1 mx-md-15 d-flex align-center justify-end">
        <v-col
          cols="6">
          <p class="text-light footerSize ma-0">{{ $t('footer.copyrightDisclaimer', {baseURL: $config.baseURL}) }}</p>
        </v-col>
        <v-col cols="6" align="right">
          <a class="text-decoration-none" :href="$t('socialMedia.facebook')" target="_blank"><v-icon class="px-2 social-icon" color="white">mdi-facebook</v-icon></a>
          <a class="text-decoration-none" :href="$t('socialMedia.twitter')" target="_blank"><v-icon class="px-2 social-icon" color="white">mdi-twitter</v-icon></a>
          <a class="text-decoration-none" :href="$t('socialMedia.instagram')" target="_blank"><v-icon class="px-2 social-icon" color="white">mdi-instagram</v-icon></a>
          <a class="text-decoration-none" :href="$t('socialMedia.linkedin')" target="_blank"><v-icon class="px-2 social-icon" color="white">mdi-linkedin</v-icon></a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer"
}
</script>

<style scoped>
.footerSize {
  font-size: 13px;
}

.text-light {
  color: #f8f9fa;
}
.text-decoration-none{
  text-decoration: none;
}
.social-icon.v-icon:hover {
  color: #3D82C5 !important;
  caret-color: #3D82C5 !important;
}
</style>
