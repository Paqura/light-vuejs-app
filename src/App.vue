<template>
  <b-container>
    <Search></Search>
    <Table></Table>
  </b-container>
</template>

<script>
import Table from './components/Table.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: { Table, Search },
};
</script>

<style>
  body {
    margin: 16px 0 !important;
  }
</style>
