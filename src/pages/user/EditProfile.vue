<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="confirm-title">
      <span class="title font-weight-light">Edit Profile</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="edit">
      <v-card-text>
        <div class="confirm-user">
          <v-text-field
           v-model="editConfirmUserInfo.name"
            type="text"
            label="Name"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="confirm-user">
          <v-text-field
            v-model="editConfirmUserInfo.phone"
            type="text"
            label="Phone"
            hide-details="auto"
          ></v-text-field>
        </div>
         <div class="confirm-user">
          <v-text-field
           v-model="editConfirmUserInfo.address"
            type="text"
            label="Address"
            hide-details="auto"
          ></v-text-field>
        </div>
         <div class="confirm-user">
          <v-text-field
           v-model="editConfirmUserInfo.dob"
            type="text"
            label="DOB"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="confirm-user">
          <v-avatar size="100" class="mr-4">
            <img v-bind:src="imgPath"  alt="Avatar">
          </v-avatar>
        </div>
        <div class="confirm-user">
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            type="file"
            label="New Profile"
            v-model="profile_path"
            v-on:change="showProfile(profile_path)"
          ></v-file-input>
         <v-avatar size="100" class="mr-4">
            <img id="output" >
          </v-avatar>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="confirm-action">
          <v-spacer></v-spacer>
          <v-btn type="submit"  large color="success" class="mr-4" >Edit</v-btn>
          <v-btn   large color="secondary" class="mr-4" @click="clear">Clear</v-btn>
          <v-btn   large color="primary" class="mr-4" @click="changePassword">Change Password</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/user/profile-edit.js">
</script>

<style scoped src="../../assets/css/pages/user/user-edit-confirm.css">

</style>