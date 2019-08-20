<template>
  <section class="search">
        <h1>Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="gamertag" id="gamertag" v-model="gamertag"
                     placeholder="Original ID, Xbox Living gamertag, PSN ID, etc" />
            </div>
            <div class="form-group">
                <input class="btn" type="submit" value="Submit" />
            </div>
        </form>
  </section>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            platform: "psn",
            gamertag: "",
        };
    },
    beforeCreate() {
        document.body.className = "body-bg-image";
    },
    methods: {
        onSubmit() {
            if (!this.gamertag) {
                this.$toasted.show('Please enter a gamertag.', {
                    duration: 3000,
                    icon: 'exclamation-circle',
                    action: {
                        text: 'cancel',
                        onClick(e, toastObject) {
                            toastObject.goAway(0);
                        },
                    },
                });
            } else {
                this.$router.push(
                    `/${this.platform}/${this.gamertag}`
                );
            }
        }
    }
}
</script>

<style>
.toasted-container .fa-exclamation-circle {
    margin-right: 10px;
}
</style>