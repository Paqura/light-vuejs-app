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

export default {
  data() {
    return {
      fields: [
        {
          key: 'country',
          label: 'Country',
        },
        {
          key: 'cases',
          label: 'Cases',
        },
        {
          key: 'flag',
          label: 'Flag',
          formatter: 'flagFormatter',
        },
      ],
    };
  },

  computed: mapGetters(['getFullData']),

  methods: {
    ...mapActions(['fetchData']),

    flagFormatter(value, key, item) {
      return item.countryInfo.flag;
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
