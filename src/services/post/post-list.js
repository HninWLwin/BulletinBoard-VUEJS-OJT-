import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
      dialogTitle: "",
      dialog: false,
      isDeleteDialog: false,
      isPostDetailDialog: false,
      search: "",
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Post Title",
          value: "title",
        },
        {
          text: "Post Desciption",
          value: "description",
        },
        {
          text: "Posted User",
          value: "created_user",
        },
        {
          text: "Operation",
          value: "operation",
        },
      ],
      postList: [],
      showList: [],
      editedItem: {
        title: "",
        description:  ""
      },
      defaultItem: {
        title: "",
        description:  ""
      },
      editedIndex: -1,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "deletePostData"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
  },
  beforeMount() {
    this.$axios
      .get("/post/list")
      .then((response) => {
        this.postList = response.data.post_list;
        this.showList = this.postList;
        this.showList = this.postList.filter(post => ("deleted_user_id" in post) == false);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    /**
     * This is to filter posts of datatable.
     * @returns void
     */
    filterPosts() {
      this.showList = this.postList.filter((post) => {
        return (
          post.title.includes(this.keyword) ||
          post.description.includes(this.keyword) ||
          post.created_user.includes(this.keyword)
        );
      });
    },

    /**
     * This is post create .
     * @returns void
    */
     create () {
      this.$router.push({ name: "post-create" });
    },

    /**
     * This is post detail .
     * 
    */
     postDetail(item) {
       this.showList = this.postList.filter(
         post => (post.id == item.id && 
          ("deleted_user_id" in post) == false));
        this.isPostDetailDialog = true
    },


    /**
     * This is post edit .
     * 
    */
    editPost(item) {
      this.$store.commit("setEditPostData", {
        id: item.id,
        title: item.title, 
        description: item.description
    });
      this.$router.push({ name: "post-edit" })
    },

    /**
     * This is post delete .
     *
    */
    deletePost(item) {
      this.$store.commit("setDeletePost", {
        id: item.id,
        title: item.title, 
        description: item.description
    });
      this.isDeleteDialog = true
    },

     /**
     * This is post delete confirm .
     * 
     */
    deleteItemConfirm () {
      this.$axios
      .delete("/delete/post/" + this.deletePostData.id )
      .then(() => {
        this.showList = this.postList.filter(post => ("deleted_user_id" in post) == false);
        this.showList.splice(this.editedIndex, 1)
      })
      .catch((err) => {
        console.log(err);
      });

      this.isDeleteDialog = false
    },
    
  },
};
