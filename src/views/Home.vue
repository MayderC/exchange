<template>
  <div>
    <ex-assets-table :assets="assets"></ex-assets-table>
  </div>
</template>

<script>
import exAssetsTable from "@/components/exAssetsTable.vue";
import api from "../Api";

export default {
  name: "Home",
  components: { exAssetsTable },

  data() {
    return {
      assets: [],
    };
  },

  created() {
    api.getData().then((res) => (this.assets = res.data));
  },
};
</script>
