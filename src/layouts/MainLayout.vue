<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="app-main-layout">
      <Nav @click="isOpen = !isOpen" />

      <Side v-model="isOpen" />

      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link
          class="btn-floating btn-large blue"
          to="/record"
          v-tooltip="'Создать новую запись'"
        >
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "../components/bars/Nav";
import Side from "../components/bars/Side";
import messages from '../commands/messages'


export default {
  name: "main-layout",
  data() {
    return {
      isOpen: true,
      loading: true
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    Side,
    Nav
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbErr) {
      this.$error(messages[fbErr.code] || "Что-то пошло не так");
    }
  }
};
</script>
