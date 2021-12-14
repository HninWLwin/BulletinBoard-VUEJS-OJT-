<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="edit-title">
      <span class="title font-weight-light">Edit User</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="edit">
      <v-card-text>
        <div class="edit-user">
          <v-text-field
           v-model="editUserInfo.name"
            type="text"
            label="Name"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="edit-user">
          <v-text-field
            v-model="editUserInfo.phone"
            type="text"
            label="Phone"
            hide-details="auto"
          ></v-text-field>
        </div>
         <div class="edit-user">
          <v-text-field
           v-model="editUserInfo.address"
            type="text"
            label="Address"
            hide-details="auto"
          ></v-text-field>
        </div>
         <div class="edit-user">
          <v-text-field
           v-model="editUserInfo.dob"
            type="text"
            label="DOB"
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
<script src="../../services/user/user-edit.js">
</script>

<style scoped src="../../assets/css/pages/user/user-edit.css">

</style>