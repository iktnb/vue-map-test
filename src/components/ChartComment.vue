<template>
  <div class="chart">
    <canvas ref="Canvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      labels: [],
      data: [],
    };
  },
  props: {
    id: {
      required: true,
      type: Number,
    },
    comments: {
      required: true,
      type: Array,
    },
  },
  mounted() {
    this.prepareChartConfig();
  },
  methods: {
    prepareChartConfig() {
      this.comments.forEach((comment) => {
        this.labels.push(comment.id);
        this.data.push(comment.email.length);
      });

      const ctx = this.$refs.Canvas;

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "# letters in email",
              data: this.data,
            },
          ],
        },
      });
    },
  },
};
</script>

<style>
.chart {
  border: 1px solid teal;
  margin: 10px;
}
</style>
