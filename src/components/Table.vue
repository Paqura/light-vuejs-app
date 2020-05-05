<template>
  <b-table striped bordered hover :items="getFullData" :fields="fields">
    <template v-slot:cell(flag)="data">
      <img :src="data.value" alt="Flag" width="32px" />
    </template>
  </b-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { allowedFields, flagFormatter } from './utils';

export default {
  data() {
    return {
      fields: allowedFields,
    };
  },

  computed: mapGetters(['getFullData']),

  methods: {
    ...mapActions(['fetchData', 'sortData']),

    flagFormatter,

    sort() {
      this.sortData();
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
