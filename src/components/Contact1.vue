<template>
  <div class="container">
    <div class="head">
      <h1>GET IN TOUCH</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        debitis.
      </p>
    </div>
    <div class="main">
      <v-card flat>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Registration successful!</span>
          <v-icon dark> mdi-checkbox-marked-circle </v-icon>
        </v-snackbar>
        <v-form ref="form" @submit.prevent="submit">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.first"
                  v-on:keypress="isLetter($event)"
                  :rules="rules.name"
                  color="blue"
                  label="Your Name"
                  required
                >
                  <template #prepend>
                    <v-icon color="pink" right>mdi-account-circle </v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.email"
                  :rules="rules.emailRules"
                  color="blue"
                  label="E-mail"
                  required
                  ><template #prepend>
                    <v-icon color="pink" right>mdi-email </v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.subject"
                  v-on:keypress="isLetter($event)"
                  :rules="rules.name"
                  color="blue"
                  label="Subject"
                  required
                  ><template #prepend>
                    <v-icon color="pink" right>mdi-lead-pencil </v-icon>
                  </template></v-text-field
                >
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="text"
                  @keypress="onlyNumber"
                  v-model="form.phone"
                  :rules="rules.phone"
                  color="blue"
                  label="Phone Number"
                  maxlength="10"
                  required
                  ><template #prepend>
                    <v-icon color="pink" right>mdi-phone </v-icon>
                  </template></v-text-field
                >
              </v-col>
              <v-col cols="12" sm="6">
                <v-textarea solo name="input-7-4" label="Your Message">
                  <template #prepend>
                    <v-icon color="pink" right>mdi-message-text </v-icon>
                  </template></v-textarea
                >
              </v-col>
              <v-col cols="12">
                <v-checkbox v-model="form.terms" color="green">
                  <template v-slot:label>
                    <div @click.stop="">
                      Do you accept the
                      <a href="#" @click.prevent="terms = true">terms</a>
                      and
                      <a href="#" @click.prevent="conditions = true"
                        >conditions?</a
                      >
                    </div>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn text @click="resetForm"> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!formIsValid" text color="primary" type="submit">
              Register
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-dialog v-model="terms" width="70%">
          <v-card>
            <v-card-title class="text-h6"> Terms </v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="purple" @click="terms = false"> Ok </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
          <v-card>
            <v-card-title class="text-h6"> Conditions </v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="purple" @click="conditions = false">
                Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      first: "",
      email: "",
      subject: "",
      phone: "",
      terms: false,
    });
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        phone: [
          (v1) => !!v1 || "Phone number is required",
          (v1) => /\d{10}/.test(v1) || "Please enter correct mobile number",
          (v1) =>
            (v1 && v1.length == 10) || "Please enter correct mobile number",
        ],
      },
      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      terms: false,
      defaultForm,
    };
  },
  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.email &&
        this.form.subject &&
        this.form.phone &&
        this.form.terms
      );
    },
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true;
      // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>