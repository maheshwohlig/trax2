<template>
  <div id="creative">
    <img
      class="creative-cover-img"
      src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <div class="creative-text-on-img">
      <h1>Be Creative</h1>
      <br />
      <pre>
        the integration of web fonts has always beenone of the largest
        contributing factors to diversify in the overall look and feel of
        websides today just like.
      </pre>
      <p>nature,shore,stars</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {};
  },
};
</script>

<style scoped>
.creative-cover-img {
  width: 100%;
}
.creative-text-on-img {
  position: absolute;
  margin-top: -40%;
  left: 40%;
  text-align: right;
}
</style>