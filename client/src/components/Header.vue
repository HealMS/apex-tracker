<template>
    <header>
        <img :src="image" />
    </header>
</template>

<script>
import logoSrc from "@/assets/logo.png"

export default {
    name: 'Header',
    data() {
        return {
            image: logoSrc
        };
    },
}
</script>

<style>
img {
    width: 300px;
}
@media(max-width: 700px) {
    img {
        display: block;
        margin: auto;
    }
}
</style>