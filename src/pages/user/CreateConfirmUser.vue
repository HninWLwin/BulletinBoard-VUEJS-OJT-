<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="create-title">
      <span class="title font-weight-light">Confirm Create User</span>
    </v-card-title>
    <v-form ref="form"  @submit.prevent="confirm">
      <v-card-text>
        <div class="create-input">
          <v-text-field
            v-model="createUserInfo.name"
            type="text"
            label="Name"
            readonly
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="createUserInfo.email"
            type="text"
            label="Email Address"
            readonly
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="createUserInfo.password"
            type="password"
            label="Password"
            readonly
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="createUserInfo.phone"
            type="text"
            label="Phone"
            readonly
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="createUserInfo.address"
            type="text"
            label="Address"
            readonly
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="createUserInfo.dob"
            type="text"
            label="DOB"
            readonly
          ></v-text-field>
        </div>
         <div class="create-input"> 
          <v-avatar size="100" class="mr-4">
            <img id="profile" alt="Profile">
          </v-avatar>
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
<script src="../../services/user/user-create-confirm.js">
</script>

<style scoped src="../../assets/css/pages/user/user-create.css">

</style>