<template>
  <div class="container">
    <header />
    <hr />
    <tableStatus />
    <hr />
    <footer />
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import TableStatus from './components/TableStatus.vue';
    import Footer from './components/Footer.vue';

    export default {
      components: {
        'header': Header,
        'tableStatus': TableStatus,
        'footer': Footer
      }
    }
</script>

<style>
</style>
