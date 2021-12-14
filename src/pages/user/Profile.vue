<template>
    <v-container fluid>
        <v-layout column>
            <v-card class="mx-auto" max-width="700">
                <v-card-title class="profile">
                    <span class="title font-weight-light">Profile</span>
                </v-card-title>
                <v-avatar size="100" class="mr-4">
                    <img v-bind:src="imgPath"  alt="Avatar">
                </v-avatar>
                <div class="showppdata">
                        <v-card-text >
                            <table v-for="user in showUserList" :key="user.id">
                                <tr width="100" height="50">
                                    <td colspan="2" width="100">Name </td>
                                    <td>{{ user.name }}</td>
                                </tr>
                                <tr width="100" height="50">
                                    <td colspan="2" width="100">Email </td>
                                    <td> {{ user.email }}</td>
                                </tr>
                                <tr width="100" height="50">
                                    <td colspan="2" width="100">Phone </td>
                                    <td>{{ user.phone }}</td>
                                </tr>
                                <tr width="100" height="50">
                                    <td colspan="2" width="100">DOB </td>
                                    <td> {{ user.dob }}</td>
                                </tr>
                                <tr width="100" height="50">
                                    <td colspan="2" width="100">Address </td>
                                    <td> {{ user.address }}</td>
                                </tr>
                            </table>
                        </v-card-text>
                </div>
                       
                <v-card-actions>
                    <div class="profile-action">
                        <v-btn color="success"  @click="editProfile">
                            Edit Profile
                        </v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>
<script src="../../services/user/profile.js">
</script>

<style scoped src="../../assets/css/pages/user/profile.css">

</style>