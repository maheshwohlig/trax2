<template>
  <div class="main">
    <div id="home">
      <home></home>
    </div>
    <div id="creative">
      <creative></creative>
    </div>
    <div id="social">
      <social></social>
    </div>
    <div id="contact">
      <contact></contact>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Creative from "@/components/Creative.vue";
import Social from "@/components/Social.vue";
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Home,
    Creative,
    Social,
    Contact,
  },
};
</script>
