<template>
  <div class="flex overflow-hidden my-4">
    <img
      class="inline-block h-32 w-32 rounded-full text-white shadow-solid "
      :src="picture"
      alt="profile name"
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data: () => {
    return {
      picture: null,
    };
  },
  methods: {
    getUserPicture() {
      fetch("https://api.github.com/users/gahflorencio")
        .then((response) => response.json())
        .then((data) => this.picture = data.avatar_url);
    },
  },
  created(){
    this.getUserPicture();
  }
};
</script>
