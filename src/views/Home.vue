<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <HomeBill :rates="currency.rates" />
      <HomeCurrency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import HomeBill from '../components/home/HomeBill'
import HomeCurrency from '../components/home/HomeCurrency'

export default {
  name: "home",
  data: () => ({
    loading: true,
    currency : null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency');
    this.loading = false;
  },
  methods: {
    refresh() {
      this.loading=true;
      setTimeout( async ()=>{
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading=false;
      },1000)
    }
  },
  components: {
    HomeBill,
    HomeCurrency
  }
};
</script>
