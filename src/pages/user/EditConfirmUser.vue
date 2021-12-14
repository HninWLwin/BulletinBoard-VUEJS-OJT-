<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="confirm-title">
      <span class="title font-weight-light">Edit Confirm User</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="confirm">
      <v-card-text>
        <div class="confirm-user">
          <v-text-field
           v-model="editConfirmUserInfo.name"
            type="text"
            label="Name"
            hide-details="auto"
            readonly
          ></v-text-field>
        </div>
        <div class="confirm-user">
          <v-text-field
            v-model="editConfirmUserInfo.phone"
            type="text"
            label="Phone"
            hide-details="auto"
            readonly
          ></v-text-field>
        </div>
         <div class="confirm-user">
          <v-text-field
           v-model="editConfirmUserInfo.address"
            type="text"
            label="Address"
            hide-details="auto"
            readonly
          ></v-text-field>
        </div>
         <div class="confirm-user">
          <v-text-field
           v-model="editConfirmUserInfo.dob"
            type="text"
            label="DOB"
            hide-details="auto"
            readonly
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="confirm-action">
          <v-spacer></v-spacer>
          <v-btn type="submit"  large color="success" class="mr-4" @click="editConfirm">Confirm</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/user/user-edit-confirm.js">
</script>

<style scoped src="../../assets/css/pages/user/user-edit-confirm.css">

</style>