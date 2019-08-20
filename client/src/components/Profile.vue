<template>
  <div>
      <div v-if="loading" class="loading">
          <h1>loading...</h1>
      </div>
      <div v-if="error" class="error">
          <h1>{{error}}</h1>
          <router-link to="/">Go back</router-link>
      </div>
      <div v-if="profileData" class="container">
          <h1 class="gamertag">
              <img :src="profileData.platformInfo.avatarUrl" alt="" class="platform-avatar">
              {{profileData.platformInfo.platformUserId}}
          </h1>

      </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "ApexProfile",
    data() {
        return {
            loading: false,
            error: null,
            profileData: null,
        };
    },
    beforeCreate() {
        document.body.className = "body-bg-no-image";
    },
    async created() {
        this.loading = true;
        try {
            const { platform, gamertag } = this.$route.params;
            const response = await axios.get(`/api/v1/profile/${platform}/${gamertag}`);
            this.profileData = response.data.data;
            console.log(this.profileData);
            this.loading = false;
        } catch(err) {
            this.loading = false;
            this.error = err.message;
        }
    },
}
</script>

<style>

</style>