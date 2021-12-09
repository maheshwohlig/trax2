<template>
  <div id="contact">
    <img
      class="contact-cover-img"
      src="https://media.istockphoto.com/vectors/blue-abstract-background-vector-id1007179744?k=20&m=1007179744&s=612x612&w=0&h=H1wHleTA786M7j0oE0iZcicL_UCOq3XleRibgGtbMqY="
    />
    <div class="contact-ontext">
      <p>Leave a message</p>
      <br />
      <h1>Need Assistance?</h1>
      <br />
      <form class="form" @submit.prevent="submit()">
        <div class="contact-detail-container">
          <div class="detail-div">
            <input
              autocomplete="off"
              type="text"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              placeholder="Name"
              id="name"
              v-model="name"
              required
            />

            <input
              autocomplete="off"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              v-model="email"
              :rules="rules.email"
              required
            />
          </div>

          <br />
          <div class="detail-div">
            <input
              autocomplete="off"
              type="text"
              @keypress="onlyNumber"
              minlength="10"
              maxlength="10"
              :rules="rules.phone"
              name="contact"
              placeholder="Contact"
              id="contact"
              v-model="number"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              id="subject"
              v-model="subject"
            />
          </div>

          <br />
          <textarea
            rows="4"
            cols="100"
            name="msg"
            placeholder="Message"
            id="msg"
            v-model="msg"
            required
          />
        </div>

        <br />
        <button @click="submit" :disabled="!formIsValid" class="cover-img-btn">
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "contact",

  data() {
    return {
      name: "",
      email: "",
      number: "",
      subject: "",
      msg: "",
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],

        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],

        phone: [
          (v1) => !!v1 || "Phone number is required",
          (v1) => /\d{10}/.test(v1) || "Please enter correct mobile number",
          (v1) =>
            (v1 && v1.length === 10) || "Please enter correct mobile number",
        ],
      },
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
    },
    number: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    msg: { required },
  },

  computed: {
    formIsValid() {
      return this.name && this.email && this.number && this.subject && this.msg;
    },
  },
  methods: {
    // submitForm() {
    //   console.log("name", this.fname);
    //   console.log("email", this.email);
    //   console.log("number", this.number);
    //   console.log("subject", this.subject);
    //   console.log("message", this.msg);
    //   alert("Form Subit");
    // },
    isLetter(e) {
      const char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true;
      else e.preventDefault(); // If not match, don't add to input text
    },
    submit() {
      if (this.form.$formIsValid) {
        this.$v.$touch();
        console.log("Invalid");
      } else {
        alert("Form Submitted");
      }
    },
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
.contact-cover-img {
  width: 100%;
  height: 100%;
  margin-top: -0.7%;
}

.contact-ontext {
  text-align: center;
  color: white;
  width: 100%;
  position: absolute;
  margin-top: -65%;
}

.contact-detail-container {
  width: 80%;
  margin-left: 10%;
}

textarea {
  width: 96%;
  padding: 4%;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgb(253, 253, 253);
  color: white;
}

input {
  border: 1px solid white;
  padding: 15px 10px;
  border-radius: 50px;
  width: 45%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

.detail-div {
  display: flex;
  justify-content: space-around;
}
.invalid-name,
.invalid-email,
.invalid-number,
.invalid-msg {
  color: red;
}
.invalid-number {
  margin-left: -40%;
}
.new {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
