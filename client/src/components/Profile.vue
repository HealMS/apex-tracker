<template>
  <div>
      profile
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
            this.error = err.response.data.data;
        }
    },
}
</script>

<style>

</style>