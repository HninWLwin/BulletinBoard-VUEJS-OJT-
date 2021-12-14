<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="edit-title">
      <span class="title font-weight-light">Edit Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="edit">
      <v-card-text>
        <div class="edit-post">
          <v-text-field
           v-model="editPostInfo.title"
            type="text"
            label="Title"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="edit-post">
          <v-text-field
            v-model="editPostInfo.description"
            type="text"
            label="Description"
            hide-details="auto"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="edit-action">
          <v-spacer></v-spacer>
          <v-btn type="submit"  large color="success" class="mr-4">Edit</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-edit.js">
</script>

<style scoped src="../../assets/css/pages/post/post-edit.css">

</style>