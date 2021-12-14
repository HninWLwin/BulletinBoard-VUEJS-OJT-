import { mapGetters } from "vuex";
export default {
  data() {
    return {
       
    };
  },

  computed: {
    ...mapGetters(["editUserInfo"]),
  },

  methods: {
    /**
     * This to post edit form.
     * @returns void
     */
     edit() {
        this.$store.commit("setEditConfirmUserData", {
          id: this.editUserInfo.id,
          name: this.editUserInfo.name, 
          phone: this.editUserInfo.phone,
          address: this.editUserInfo.address,
          dob: this.editUserInfo.dob
        });
        this.$router.push({ name: "user-edit-confirm" });
    },
}
 
};