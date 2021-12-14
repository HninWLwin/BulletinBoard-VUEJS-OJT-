import { mapGetters } from "vuex";
export default {
  data() {
    return {
      error: "",
      profilePath: "",
      showUserList: [],
      imgPath: "",
    };
  },
  computed: {
    ...mapGetters(["editConfirmUserInfo"]),
  },

  mounted(){
    this.imgPath = `${process.env.VUE_APP_SERVER}/get/avator/${this.editConfirmUserInfo.id}`;
  },

  methods: {
    /**
     * This to post edit confirm form.  
     * @returns void
     */
     edit() {
        this.$axios.put("/update/user/" + this.editConfirmUserInfo.id,
        {
            name: this.editConfirmUserInfo.name,
            phone: this.editConfirmUserInfo.phone,
            address: this.editConfirmUserInfo.address,
            dob: this.editConfirmUserInfo.dob,
            profile_path: this.saveProfilePicture(this.editConfirmUserInfo.profile_path),
        })
        .then(() => {
            this.$router.push({ name: "user-list" });
        })
          .catch(err => {
            this.error = err.response.error;
            console.log(err);   
        });
    },

    saveProfilePicture(profile_path) {
      this.$axios
          .post("/save/profile_picture", profile_path)
          .then((response) => {
              this.profilePath = "./../../../mock/target/" + response.data.profile_path;
          })
          .catch((err) => {
              console.log(err);
          });
  },

  changePassword() {
    this.$router.push({ name: "user-change-password" });
  },

  showProfile(profile_path) {
    var dataURL = URL.createObjectURL(profile_path);
    var output = document.getElementById('output');
    output.src = dataURL;
},

/**
         * This is profile clear method
         */
 clear() {
  this.editConfirmUserInfo.name = "",
  this.editConfirmUserInfo.phone = "",
  this.editConfirmUserInfo.address = "",
  this.editConfirmUserInfo.dob = "",
  this.editConfirmUserInfo.profile_path = "",
  this.profilePath = "",
  this.imgPath = ""
},

}

};
