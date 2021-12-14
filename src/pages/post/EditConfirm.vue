<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="confirm-title">
      <span class="title font-weight-light">Edit Confirm Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="editConfirm">
      <v-card-text>
        <div class="confirm-post">
          <v-text-field
           v-model="editConfirmPostInfo.title"
            type="text"
            label="Title"
            hide-details="auto" 
            readonly
          ></v-text-field>
        </div>
        <div class="confirm-post">
          <v-text-field
            v-model="editConfirmPostInfo.description"
            type="text"
            label="Description"
            hide-details="auto" 
            readonly
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="confirm-action">
          <v-spacer></v-spacer>
          <v-btn type="submit"  large color="success" class="mr-4">Confirm</v-btn>
          <v-btn large color="secondary" class="mr-4" @click="cancel">Cancel</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-edit-confirm.js">
</script>

<style scoped src="../../assets/css/pages/post/post-edit-confirm.css">

</style>