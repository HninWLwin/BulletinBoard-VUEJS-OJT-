import { mapGetters } from "vuex";
export default {
  data() {
    return {
       
    };
  },

  computed: {
    ...mapGetters(["editPostInfo"]),
  },

  methods: {
    /**
     * This to post edit form.
     * @returns void
     */
     edit() {
        this.$store.commit("setEditConfirmPostData", {
            id: this.editPostInfo.id,
            title: this.editPostInfo.title, 
            description: this.editPostInfo.description
        });
        this.$router.push({ name: "post-edit-confirm" });
    },
}
 
};