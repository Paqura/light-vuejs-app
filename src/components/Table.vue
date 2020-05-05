<template>
  <b-container>
    <b-table striped bordered hover :items="getFullData" :fields="fields">
      <template v-slot:cell(flag)="data">
        <img :src="data.value" alt="Flag" width="32px" />
      </template>
    </b-table>
  </b-container>
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
    ...mapActions(['fetchData']),

    flagFormatter,
  },

  mounted() {
    this.fetchData();
  },
};
</script>
