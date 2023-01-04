<script>
import ChartComment from "./ChartComment.vue";

export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  components: { ChartComment },

  data() {
    return {
      comments: [],
      showChart: false,
    };
  },
  methods: {
    switchChartView() {
      this.showChart = !this.showChart;
    },
    getComments() {
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.post.id}`
      )
        .then((responce) => responce.json())
        .then((data) => (this.comments = data));
    },
  },
  computed: {
    countComments() {
      return this.comments.length;
    },
  },
  created() {
    this.getComments();
  },
  components: { ChartComment },
};
</script>

<template>
  <div class="post-item">
    <h4 class="title">{{ post.title }}</h4>
    <p class="content">
      {{ post.body }}
    </p>

    <p class="comments-count">
      Comments <span>{{ countComments }}</span>
    </p>
    <button
      @click="switchChartView"
      :class="{ active: showChart }"
      class="show-graph"
    >
      Statistics
    </button>
    <ChartComment
      v-if="showChart"
      :id="post.id"
      :comments="comments"
    ></ChartComment>
  </div>
</template>

<style scoped>
.post-item {
  margin: 12px 0;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #000;
}

.comments-count {
  color: gray;
  text-decoration: underline;
  text-align: right;
}

.comments-count span {
  color: #000;
  font-weight: bold;
}

.show-graph {
  color: teal;
  border: 1px solid #000;
  padding: 6px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all;
}

.active {
  background-color: lightblue;
}
</style>
