<script>
export default {
  props: {
    pages: {
      required: true,
      type: Number,
    },
    currentPage: {
      required: true,
      type: Number,
    },
  },
  methods: {
    changePage(page) {
      if (page === this.currentPage) return;
      this.$emit("pageChange", page);
    },
  },
};
</script>

<template>
  <div class="pagination-panel">
    <button
      class="pagination-item"
      v-for="page in pages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<style scoped>
.pagination-panel {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 12px 0;
}
.pagination-item {
  padding: 4px;
  margin: 0 4px;
  font-weight: bold;
  width: 30px;
  height: 30px;
}

.pagination-item.active {
  font-weight: bold;
  border: 2px solid #000;
}
</style>
