<template>
  <!-- Dialog Message Box -->
  <div class="text-center">
    <v-dialog
      v-model="showResultDialog"
      width="500"
      @click:outside="closeDialog">
      <v-card>
        <v-card-title class="text-h6 justify-center">
          <span>{{ dialogTitle }}</span>
        </v-card-title>
        <v-divider/>
        <v-card-text class="body-1 font-black pt-3 text-center">
          <!--          {{ dialogMessage }}-->
          <div v-html="dialogMessage"></div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            text
            @click="closeDialog"
          >
            {{ $t("resultDialog.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- end of Dialog Message Box-->
</template>

<script>
export default {
  name: "ResultDialog",
  props: {
    showResultDialog: Boolean,
    dialogTitle: String,
    dialogMessage: String
  },
  methods: {
    closeDialog() {
      this.$emit('update:showResultDialog', false)
    }
  }
}
</script>

<style scoped>

</style>
