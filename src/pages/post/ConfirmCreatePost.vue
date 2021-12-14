<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="create-title">
      <span class="title font-weight-light">Confirm Create Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="confirm">
      <v-card-text>
        <div class="create-input">
          <v-text-field
           v-model="postInfo.title" 
            type="text"
            label="Title"
            hide-details="auto"
            readonly
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="postInfo.description"
            type="text"
            label="Description"
            hide-details="auto"
            readonly
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="create-action">
          <v-spacer></v-spacer>
          <v-btn type="submit"  large color="success" class="mr-4">Confirm</v-btn>
          <v-btn large color="secondary" class="mr-4" @click="cancel">Cancel</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-create-confirm.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">

</style>