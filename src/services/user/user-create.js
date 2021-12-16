import { mapGetters } from "vuex";
export default {
    data: () => ({
        valid: true,
        name: "",
        email: "",
        password: "",
        profile_path: "",
        phone: "",
        address: "",
        dob: "",
        profilePath: "",
  
        // validation rules for user name.
        nameRules: [
            value => !!value || "The name field is required.",
        ],
  
         // validation rules for user email.
      emailRules: [
        value => !!value || "The email field is required.",
        value => /.+@.+\..+/.test(value) || "E-mail must be valid."
    ],
        
        // validation rules for user password.
        passRules: [
            value => !!value || "The password field is required.",
        ],

        // validation rules for user phone.
        phRules: [
            value => !!value || "The phone field is required.",
        ],

        // validation rules for user dob.
        dobRules: [
            value => !!value || "The dob field is required.",
        ],

        // validation rules for user address.
        addressRules: [
            value => !!value || "The address field is required.",
        ],

         // validation rules for user profile_path.
         profileRules: [
            value => !!value || "The profile field is required.",
        ],
    }),
    
computed: {
    ...mapGetters(["createUserInfo"]),
},

created() {
    if (this.createUserInfo) {
        this.name = this.createUserInfo.name;
        this.email = this.createUserInfo.email;
        this.phone = this.createUserInfo.phone;
        this.address = this.createUserInfo.address;
        this.dob = this.createUserInfo.dob;
        this.$store.dispatch("setCreateUser");
    }
},

methods: {
    /**
    * This to post create form.
    *@returns void
    */
    create() {
        this.$store.commit("setCreateUser", {
            name: this.name, 
            email: this.email,
            password: this.password,
            phone: this.phone,
            address: this.address,
            dob: this.dob,
            profile_path: this.profile_path,
        });
        this.$router.push({ name: "user-create-confirm" });
    },

    showProfile(profile_path) {
        var dataURL = URL.createObjectURL(profile_path);
        var output = document.getElementById('profile');
        output.src = dataURL;
    },

    /**
    * This is reset method
    */
    reset() {
    this.name = "",
    this.email = "",
    this.password = "",
    this.profile_path = "",
    this.phone = "",
    this.address = "",
    this.dob = ""
      },
    }
  };
  