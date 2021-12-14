<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="change-pass-title">
      <span class="title font-weight-light">Change Password</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="changePassword">
      <v-card-text>
        <div class="change-pass">
          <v-text-field
           v-model="old_password"
            type="password"
            label="Old Password"
            :rules="oldPassRules"
            required
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="change-pass">
          <v-text-field
            v-model="new_password"
            type="password"
            label="New Password"
            :rules="newPassRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="change-pass">
          <v-text-field
            v-model="new_confirm_password"
            type="password"
            label="Confirm Password"
            :rules="[!!new_confirm_password || 'confirm password is required', 
            new_password === new_confirm_password || 'The password confirmation does not match.']"
            hide-details="auto"
          ></v-text-field>
        </div>
        
      </v-card-text>
      <v-card-actions>
        <div class="confirm-action">
          <v-spacer></v-spacer>
          <v-btn type="submit" :disabled="!valid" large color="success" class="mr-4" >Update Password</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/user/change-password.js">
</script>

<style scoped src="../../assets/css/pages/user/user-change-password.css">

</style>