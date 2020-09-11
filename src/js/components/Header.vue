<template>
    <header class="mainHeader">
        <div class="mainHeader_inner wrapper">
            <a href="/" class="mainHeader_logo__red">Menu Generator</a>
            <button @click="openNewMenuPage()" class="">New Menu</button>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {
        openNewMenuPage() {
            console.log('clicked new menu page')
        }
    }
}
</script>