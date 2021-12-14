import { mapGetters } from "vuex";
import axios from 'axios'
export default {
  data() {
    return {
      error: "",
      message: "",
      showList: []
    };
  },
  computed: {
    ...mapGetters(["editConfirmPostInfo"]),
  },

  methods: {
    /**
     * This to post edit confirm form.
     * @returns void
     */
     editConfirm() {
        axios.put("/update/post/"+ this.editConfirmPostInfo.id,
            {
                title: this.editConfirmPostInfo.title,
                description: this.editConfirmPostInfo.description
            })
            .then(() => {
                 this.$router.push({ name: "post-list" });
            })
              .catch(err => {
                this.error = err.response.error;
                console.log(err);   
            });

    },
}

};
