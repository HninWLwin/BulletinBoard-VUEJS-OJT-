import { mapGetters } from "vuex";
import constants from "../../constants";

export default {
  data() {
    return {
      title: constants.APP_TITLE,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "userType", "userName"]),
  },
  methods: {
    /**
     * This is to log out from system.
     * @returns void
     */
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    /**
     * This is to route profile page.
     * @returns void
     */
    showProfile() {
      this.$store.commit("setCreateUser", {
        name: this.name, 
        email: this.email,
        phone: this.phone,
        dob: this.dob,
        address: this.address,
        profile_path: this.profile_path,
    });
      this.$router.push({ name: "profile" });
    },

    /**
     * This is user list .
     * @returns void
    */
     userlist () {
      this.$router.push({ name: "user-list" });
    },

    /**
     * This is post list .
     * @returns void
    */
     postlist () {
      this.$router.push({ name: "post-list" });
    },

    /**
     * This is use create .
     */
    create() {
      this.$router.push({ name: "user-create" });
    }
  },
};
