<template>
  <div class="main-container">
    <div class="main">
      <nav class="nav-bar">
        <v-row justify="center" align="center">
          <v-col cols="12" lg="3" md="4">
            <img 
              class="nav_logo d-flex justify-space-around align-items-center"
              src="data:image/png;base64,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"
            />
          </v-col>
          <v-col
            cols="12"
            lg="8"
            md="8"
            class="d-flex justify-space-around align-items-center"
          >
            <nav-item active class="navBar">home</nav-item>
            <a href="#creative" v-smooth-scroll>
              <nav-item class="navBar"> Creative</nav-item></a
            >
            <a href="#social" v-smooth-scroll>
              <nav-item class="navBar">Social</nav-item></a
            >
            <a href="#contact" v-smooth-scroll>
              <nav-item class="navBar">Contact</nav-item></a
            >
          </v-col>
        </v-row>
      </nav>
    </div>
    <div>
      <img
        src="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses="
        class="cover-img"
      />
      <div class="on-cover-img-container">
        <div class="on-cover-img">
          <h1 class="text-img">Digital Solutions</h1>
          <br />
          <div class="text-img">
            Graphics,Branding,Development,Nature,Creative,Fashion
          </div>
          <br />
          <button class="cover-img-btn">View More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.nav_logo {
  width: 100px;
}

.main {
  width: 100%;
  position: absolute;
  color: black;
  background: rgba(0, 0, 0, 0.6);
}

.nav-bar {
  padding: 15px;
}
.navBar {
  color: white;
  text-decoration: none;
}

/* .navlink {
  color: white;
  text-decoration: none;
  outline: none;
}

.navlink:hover {
  cursor: pointer;
  text-decoration: none;
  color: rgb(0, 247, 255);
  text-decoration: none;
} */

/* .navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 15px;
} */

.cover-img {
  width: 100%;
  height: 100%;
}

.on-cover-img-container {
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: -50%;
  color: black;
  /* background: #0000004d; */
}
.on-cover-img {
  text-align: center;
  margin-top: 15%;
  color: black;
}

.cover-img-btn {
  border-radius: 50px;
  padding: 10px 25px 10px;
  border: none;
  color: white;
  background-color: rgb(11, 217, 232);
}

.cover-img-btn:hover {
  color: rgb(11, 217, 232);
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(11, 217, 232);
}
</style>
