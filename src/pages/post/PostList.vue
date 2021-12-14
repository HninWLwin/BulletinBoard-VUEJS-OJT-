<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field  v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details></v-text-field>
          </v-col>
          <v-btn
            class="post-list-btn mr-4"
            color="primary"
            @click="filterPosts"
          >Filter</v-btn>
          <v-btn
            class="post-list-btn mr-4"
            color="primary"
            @click="create"
          >Create</v-btn>
          <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
          <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList" :search="search">
        <template v-slot:[`item.title`]="{ item }">
          <a v-if="item.title" @click="postDetail(item)">{{item.title}}</a>
        </template>
        <template v-slot:no-results> 
          <v-alert :value="true" color="error" icon="warning">No Search Result "{{search}}"</v-alert>
        </template>
        <template v-slot:[`item.operation`] = "{item}">
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn" @click="editPost(item)">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="post-list-btn" @click="deletePost(item)">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="isDeleteDialog" max-width="600px">
          <v-card>
            <v-card-title class="text-h5">Delete Confirm</v-card-title>
            <v-card-text>
              Are you sure you want to delete this post?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" class="post-list-btn" @click="isDeleteDialog = false">Cancel</v-btn>
              <v-btn color="error" class="post-list-btn"  @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

         <v-dialog v-model="isPostDetailDialog" max-width="600px">
          <v-card>
            <v-card-title class="text-h5">Post Detail</v-card-title>
            <v-card-text >
              <table v-for="post in showList" :key="post.id">
                <tr width="100" height="70">
                  <td colspan="2" width="100">Title </td>
                  <td>{{ post.title }}</td>
                </tr>
                <tr >
                  <td colspan="2" width="100">Description </td>
                  <td>{{ post.description }}</td>
                </tr>
              </table>
              
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" class="post-list-btn" @click="isPostDetailDialog = false">Close</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-card>
</template>
<script src="../../services/post/post-list.js">
</script>
<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

