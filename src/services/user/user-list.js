import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userInfo: null,
      dialogTitle: "",
      dialog: false,
      isDeleteDialog: false,
      isUserDetailDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Phone",
          value: "phone",
        },
        {
          text: "Date of birth",
          value: "dob",
        },
        {
          text: "Address",
          value: "address",
        },
        {
          text: "Operation",
          value: "operation",
        },
      ],
      userList: [],
      showUserList: [],
      editedItem: {
        name: "",
        phone:  "",
        address: "",
        dob:  ""
      },
      defaultItem: {
        name: "",
        phone:  "",
        address: "",
        dob:  ""
      },
      editedIndex: -1,
      imgPath: ""
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "deleteData"]),
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
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
        this.showUserList = this.userList;
        this.showUserList = this.userList.filter(user => ("deleted_user_id" in user) == false);
      })
      .catch((err) => {
        console.log(err);
      });

  },

  methods: {

    /**
     * This is user detail .
     * 
    */
     userDetail(item) {
      this.showUserList = this.userList
      .filter(user => (user.id == item.id && ("deleted_user_id" in user) == false));
      this.imgPath = `${process.env.VUE_APP_SERVER}/get/avator/${item.id}`;
      this.isUserDetailDialog = true
   },


     /**
     * This is post edit .
     * 
    */
      editUser(item) {
        this.$store.commit("setEditUserData", {
          id: item.id,
          name: item.name, 
          phone: item.phone,
          address: item.address,
          dob: item.dob
      });
        this.$router.push({ name: "user-edit" })
      },


    /**
     * This is user delete .
     *
    */
    deleteUser(item) {
      this.$store.commit("setDeleteUser", {
        id: item.id,
        name: item.name, 
        phone: item.phone,
        address: item.address,
        dob: item.dob
      });
       this.isDeleteDialog = true
    },

    /**
     * This is user delete confirm .
     * 
     */
    deleteItemConfirm () {
      this.$axios
      .delete("/delete/user/" + this.deleteData.id )
      .then(() => {
         this.showUserList = this.userList.filter(user => ("deleted_user_id" in user) == false);
         this.showUserList.splice(this.editedIndex, 1)
        })
      .catch((err) => {
        console.log(err);
      });
      this.isDeleteDialog = false
    },

  }

};
