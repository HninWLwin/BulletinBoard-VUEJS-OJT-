<template>
  <v-card>
    <v-card-title>
      User list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field label="Name" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-text-field label="Email" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-text-field label="From" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-text-field label="To" hide-details="auto"></v-text-field>
          </v-col>
          <v-btn
            class="user-list-btn mr-4"
            color="primary"
          >Search</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showUserList">
        <template v-slot:[`item.dob`]="{ item }" &&>
            <span>{{ new Date(item.dob).toLocaleString().split(',')[0] }}</span>
        </template>
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name" @click="userDetail(item)">{{item.name}}</a>
        </template>
        <template v-slot:[`item.operation`] = "{item}">
          <v-row >
            <div class="operation-btn">
              <v-btn color="primary" class="user-list-btn" @click="editUser(item)">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="user-list-btn" @click="deleteUser(item)">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
     <v-dialog v-model="isDeleteDialog" max-width="500px">
          <v-card>
             <v-card-title class="text-h5">Delete Confirm</v-card-title>
            <v-card-text>
              Are you sure you want to delete this user?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" class="user-list-btn"  @click="isDeleteDialog = false">Close</v-btn>
              <v-btn color="error" class="user-list-btn" @click="deleteItemConfirm">Delete</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="isUserDetailDialog" max-width="600px">
          <v-card>
            <v-card-title class="text-h5">User Detail</v-card-title>
            <v-card-text >
              <table v-for="user in showUserList" :key="user.id">
                <v-avatar size="100" class="mr-4">
                    <img v-bind:src="imgPath"  alt="Avatar">
                </v-avatar>
                <tr width="100" height="50">
                  <td colspan="2" >Name </td>
                  <td>{{ user.name }}</td>
                </tr>
                <tr  width="100" height="50">
                  <td colspan="2" >Email </td>
                  <td>{{ user.email }}</td>
                </tr>
                <tr width="100" height="50">
                  <td colspan="2" width="100">Phone </td>
                  <td>{{ user.phone }}</td>
                </tr>
                <tr  width="100" height="50">
                  <td colspan="2" >Date of Birth </td>
                  <td>{{ user.dob }}</td>
                </tr>
              </table>
              
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" class="user-list-btn" @click="isUserDetailDialog = false">Close</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-card>
</template>
<script src="../../services/user/user-list.js">
</script>
<style scoped src="../../assets/css/pages/user/user-list.css">
</style>