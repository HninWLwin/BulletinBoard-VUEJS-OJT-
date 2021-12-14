import { mapGetters } from "vuex";
export default {
  data() {
    return {
      error: "",
    };
  },
  computed: {
    ...mapGetters(["editConfirmUserInfo"]),
  },

  methods: {
    /**
     * This to post edit confirm form.
     * @returns void
     */
     editConfirm() {
        this.$axios.put("/update/user/" + this.editConfirmUserInfo.id,
            {
                name: this.editConfirmUserInfo.name,
                phone: this.editConfirmUserInfo.phone,
                address: this.editConfirmUserInfo.address,
                dob: this.editConfirmUserInfo.dob
            })
            .then(() => {
                this.$router.push({ name: "user-list" });
            })
              .catch(err => {
                this.error = err.response.error;
                console.log(err);   
            });

    },

    cancel() {
      this.$router.go(-1);
  }
}

};
