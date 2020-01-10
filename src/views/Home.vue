<template>
    <div class="container">
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>    
        <h6>Click on 'End Day' to begin a New Day!</h6>    
        <hr>
        <p>Your Funds: <strong> {{ funds }} </strong> </p>    
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    computed: {
        funds() {
            return this.$store.getters.getFunds;
        }
    }
}
</script>
