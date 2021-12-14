<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="create-title">
      <span class="title font-weight-light">Create User</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="create">
      <v-card-text>
        <div class="create-error">{{error}}</div>
        <div class="create-input">
          <v-text-field
            v-model="name"
            type="text"
            label="Name"
             required
            :rules="nameRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="email"
            type="text"
            label="Email Address"
             required
            :rules="emailRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
             required
            :rules="passRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="phone"
            type="text"
            label="Phone"
            :rules="phRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="address"
            type="text"
            label="Address"
            :rules="addressRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-text-field
            v-model="dob"
            type="date"
            label="DOB"
            required
            :rules="dobRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="create-input">
          <v-file-input
            :rules="profileRules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            type="file"
            label="Profile"
            v-model="profile_path"
            v-on:change="showProfile(profile_path)"
          >
          </v-file-input>
          <v-avatar size="100" class="mr-4">
            <img id="profile" >
          </v-avatar>
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
<script src="../../services/user/user-create.js">
</script>

<style scoped src="../../assets/css/pages/user/user-create.css">

</style>