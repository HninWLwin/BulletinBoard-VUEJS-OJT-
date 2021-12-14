import { mapGetters } from "vuex";
import axios from 'axios'
export default {
  data() {
    return {
        error: "",
        profilePath: ""
    };
  },
  computed: {
    ...mapGetters(["createUserInfo"]),
  },
  
mounted(){
  var dataURL = URL.createObjectURL(this.createUserInfo.profile_path);
  var output = document.getElementById('profile');
  output.src = dataURL;
},

  beforeMount() {
    if(this.createUserInfo == null)
    {
        this.$router.push({ name: "post-list" });
    }
  },

  destroyed(){
    this.$store.commit("setCreateUser", null);
  },    

  methods: {
    /**
     * This to user create confirm form.
     * @returns void
     */
     confirm() {
        axios.post("create/user",
            {
                name: this.createUserInfo.name,
                email: this.createUserInfo.email,
                password: this.createUserInfo.password,
                phone: this.createUserInfo.phone,
                address: this.createUserInfo.address,
                dob: this.createUserInfo.dob,
                profile_path: this.saveProfilePicture(this.createUserInfo.profile_path),
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

    cancel() {
        this.$router.go(-1);
    }
}

};
