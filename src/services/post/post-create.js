export default {
    data: () => ({
        valid: true,
        title: "",
        description: "",
        error: "",
  
        // validation rules for post title.
        titleRules: [
            value => !!value || "The title field is required.",
        ],
  
        // validation rules for post description.
        desRules: [value => !!value || "The description field is required."]
    }),

    mounted() {
        this.title = localStorage.getItem("title");
        this.description = localStorage.getItem("description")
    },

    methods: {
        /**
         * This to post create form.
         * @returns void
         */
         create() {
            this.$store.commit("setPostData", {
                title:this.title, 
                description:this.description
            });
            
            localStorage.setItem("title", this.title);
            localStorage.setItem("description", this.description);
            this.$router.push({ name: "post-create-confirm" });
        },

        reset() {
        this.title = "",
        this.description = ""
      },
    }
  };
  