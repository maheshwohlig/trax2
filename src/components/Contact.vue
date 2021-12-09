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
              type="text"
              placeholder="Name"
              id="name"
              v-model="name"
              v-model.trim="$v.name.$model"
              :class="{
                'is-invalid': $v.name.$error,
                'is-valid': $v.name.$invalid,
              }"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              v-model="email"
              v-model.trim="$v.email.$model"
              :rules="emailRules"
              :class="{
                'is-invalid': $v.email.$error,
                'is-valid': $v.email.$invalid,
              }"
              required
            />
          </div>
          <div class="new">
            <div class="invalid-name">
              <div v-if="$v.name.$error" class="invalid-feedback">
                <div class="invalid2">
                  <span v-if="!$v.name.required" class="invalid1"
                    >Name is required</span
                  >
                  <span v-if="!$v.name.minLength" class="invalid1"
                    >Name must contain at least 3 characters</span
                  >
                </div>
              </div>
            </div>
            <div class="invalid-email">
              <div v-if="$v.email.$error" class="invalid-feedback">
                <div class="invalid2">
                  <span v-if="!$v.email.required" class="invalid1"
                    >email is required</span
                  >
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="detail-div">
            <input
              type="number"
              :counter="10"
              name="contact"
              placeholder="Contact"
              id="contact"
              v-model="number"
              v-model.trim="$v.number.$model"
              :class="{
                'is-invalid': $v.number.$error,
                'is-valid': $v.number.$invalid,
              }"
              required
            />

            <!-- <span v-if="!$v.number.required">number is required</span> -->
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              id="subject"
              v-model="subject"
            />
          </div>
          <!-- <span v-if="!$v.subject.required">subject is required</span> -->

          <div class="invalid-number">
            <div v-if="$v.number.$error" class="invalid-feedback">
              <div class="invalid2">
                <span v-if="!$v.number.required" class="invalid1"
                  >number is required</span
                >
              </div>
            </div>
          </div>
          <br />
          <textarea
            rows="4"
            cols="100"
            name="msg"
            placeholder="Message"
            id="msg"
            v-model="msg"
            v-model.trim="$v.msg.$model"
            :class="{
              'is-invalid': $v.msg.$error,
              'is-valid': $v.msg.$invalid,
            }"
            required
          />
        </div>
        <div class="invalid-msg">
          <div v-if="$v.msg.$error" class="invalid-feedback">
            <div class="invalid2">
              <span v-if="!$v.msg.required" class="invalid1"
                >message is required</span
              >
            </div>
          </div>
        </div>

        <br />
        <button @click="submit" :disabled="invalid" class="cover-img-btn">
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "contact",
  data() {
    return (
      {
        name: "",
        email: "",
        number: "",
        subject: "",
        msg: "",
      },
      {
        //   valid: true,
        //   fname: "",
        //   nameRules: [
        //     (v) => !!v || "name is required",
        //     (v) =>
        //       (v && v.length <= 10) ||
        //       "name must be less than 10 characters long",
        //   ],
        name: "",
        email: "",
        // emailRules: [
        //   (v) => !!v || "email is required",
        //   (v) => /.+@.+\..+/.test(v) || "Email must be valid",
        // ],
        number: "",
        //subject: "",
        msg: "",
      }
    );
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
    },
    msg: { required },
  },
  // watch: {
  //   email(value) {
  //     // binding this to the data value in the email input
  //     this.email = value;
  //     this.validateEmail(value);
  //   },
  // },

  methods: {
    // submitForm() {
    //   console.log("name", this.fname);
    //   console.log("email", this.email);
    //   console.log("number", this.number);
    //   console.log("subject", this.subject);
    //   console.log("message", this.msg);
    //   alert("Form Subit");
    // },
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("Invalid");
      } else {
        console.log("afsfgweg");
        alert("Form Submitted");
      }
    },
  },
};
</script>

<style scoped>
.contact-cover-img {
  width: 100%;
  height: 100%;
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
  width: 100%;
  padding: 4%;
  
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid black;
}

input {
  border: 1px solid white;
  padding: 15px 10px;
  border-radius: 50px;
  width: 45%;
  background-color: rgba(0, 0, 0, 0.6);
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
