import { mapGetters } from "vuex";

export default {
    data: () => ({
        old_password: "",
        new_password: "",
        new_confirm_password: "",
        valid: true,

        // validation rules for old password.
        oldPassRules: [value => !!value || "The old password field is required."],

        // validation rules for new password.
        newPassRules: [value => !!value || "The new password field is required."],

       
    }),

    computed: {
        ...mapGetters(["profileData"]),
      },


    methods: {
        /**
         * This to change password form.
         * @returns void
         */
         changePassword() {
            const token = localStorage.getItem('tweetr-token')
            this.$axios.post("/user/change-password/"+ this.profileData.id,
            {
                old_password: this.old_password,
                new_password: this.new_password
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(() => {
                this.$router.push({ name: "user-list" });
            })
              .catch(err => {
                this.error = err.response.error;
                console.log(err);   
            });
        }
    }
  };
  