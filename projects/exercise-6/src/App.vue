<template>
  <div class="container">
    <Header />
    <hr />
    <TableStatus />
    <hr />
    <Footer />
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import TableStatus from './components/TableStatus.vue';
    import Footer from './components/Footer.vue';

    export default {
      components: {
        Header,
        TableStatus,
        Footer
      }
    }
</script>

<style>
</style>
