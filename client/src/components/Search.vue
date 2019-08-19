<template>
  <section class="search">
        <h1>Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="gamertag" id="gamertag" />
            </div>
            <div class="form-group">
                <input class="btn" type="submit" value="Submit" />
            </div>
        </form>
  </section>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style>

</style>