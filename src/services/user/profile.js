import { mapGetters } from "vuex";

export default {
  data() {
    return {  
      profilePath: "",
      userList: [],
      showUserList: [],
      name: "",
      imgPath: ""
    };
  },
  computed: {
    ...mapGetters(["profileData"]),
  },

  beforeMount() {
    this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
        this.showUserList = this.userList.filter(
          user => (user.id == this.profileData.id && 
          ("deleted_user_id" in user) == false));
        })
        .catch((err) => {
          console.log(err);
        });

        this.imgPath = `${process.env.VUE_APP_SERVER}/get/avator/${this.profileData.id}`;
  },


  methods: {
    editProfile() {
        this.$store.commit("setEditConfirmUserData", {
            id: this.showUserList[0].id,
            name: this.showUserList[0].name, 
            phone: this.showUserList[0].phone,
            address: this.showUserList[0].address,
            dob: this.showUserList[0].dob,
            profile_path: this.showUserList[0].profile_path
          });
        this.$router.push({ name: "profile-edit" });
    },

    
  }
};
