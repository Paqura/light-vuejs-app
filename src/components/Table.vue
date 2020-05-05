<template>
  <b-container>
    <b-table striped bordered hover :items="items" :fields="fields">
      <template v-slot:cell(flag)="data">
        <img :src="data.value" alt="Flag" width="32px" />
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      endpoint: 'https://corona.lmao.ninja/v2/countries',
      items: [],
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

  methods: {
    flagFormatter(value, key, item) {
      return item.countryInfo.flag;
    },
  },

  async mounted() {
    this.items = await fetch(this.endpoint).then((res) => res.json());
  },
};
</script>
