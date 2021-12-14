import { mapGetters } from "vuex";
import axios from 'axios'
export default {
  data() {
    return {
        error: "",
    };
  },
  computed: {
    ...mapGetters(["postInfo"]),
  },
  beforeMount() {
    if(this.postInfo == null)
    {
        this.$router.push({ name: "post-list" });
    }
  },

  destroyed(){
    this.$store.commit("setPostData", null);
  },    

  methods: {
    /**
     * This to post create confirm form.
     * @returns void
     */
     confirm() {
        axios.post("create/post",
            {
                title: this.postInfo.title,
                description: this.postInfo.description
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
