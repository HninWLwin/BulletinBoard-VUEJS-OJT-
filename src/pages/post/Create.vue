<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="create-title">
      <span class="title font-weight-light">Create Post</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="create">
      <v-card-text>
        <div class="create-error">{{error}}</div>
        <div class="create-input">
          <v-text-field
            v-model="title"
            type="text"
            label="Title"
             required
            :rules="titleRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="description"
            type="description"
            label="Description"
             required
            :rules="desRules"
            hide-details="auto"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="create-action">
          <v-spacer></v-spacer>
          <v-btn type="submit" :disabled="!valid" large color="success" class="mr-4">Create</v-btn>
          <v-btn large color="secondary" class="mr-4" @click="reset">Clear</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-create.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">

</style>