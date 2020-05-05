<template>
  <b-form>
    <b-row>
      <b-col>
        <b-form-group>
          <b-form-input v-model="searchString"></b-form-input>
        </b-form-group>
      </b-col>

      <b-col>
        <b-button
          variant="primary"
          type="submit"
          @click="onSubmit"
        >
          Search
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchString: '',
    };
  },

  methods: {
    ...mapActions(['fetchCountry', 'fetchData']),

    onSubmit(evt) {
      evt.preventDefault();
      const preparedString = this.searchString.trim();
      return preparedString.length
        ? this.fetchCountry(preparedString)
        : this.fetchData();
    },
  },
};
</script>
