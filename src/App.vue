<template>
  <Table />
</template>

<script>
import Table from './components/Table.vue';
import store from './store';

export default {
  name: 'App',
  store,
  components: { Table },
};
</script>
