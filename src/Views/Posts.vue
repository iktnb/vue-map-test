<script>
import PostItem from "../components/PostItem.vue";
import Pagination from "../components/Pagination.vue";
export default {
  data() {
    return {
      posts: [],
      pageNumber: 0,
      postsInPage: 10,
      search: "",
    };
  },
  components: { PostItem, Pagination },
  methods: {
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((e) => console.log(e));
    },
    changePage(e) {
      this.pageNumber = e - 1;
    },
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    pages() {
      let postsPage = this.postsInPage;
      let postsCount = this.filteredPosts.length;
      return Math.ceil(postsCount / postsPage);
    },
    paginetedPosts() {
      const start = this.pageNumber * this.postsInPage,
        end = start + this.postsInPage;
      return this.filteredPosts.slice(start, end);
    },
  },
  created() {
    this.getPosts();
  },
  watch: {
    search() {
      if (this.pageNumber === 0) return;
      this.pageNumber = 0;
    },
  },
};
</script>
<template>
  <div class="posts_wrapper">
    <div class="search-post">
      <label for="posts-filter">Search post</label>
      <input
        v-model="search"
        id="posts-filter"
        placeholder="Title"
        type="text"
        class="posts-filter"
      />
    </div>
    <template v-if="paginetedPosts.length">
      <PostItem
        :post="post"
        v-for="post in paginetedPosts"
        :key="post"
      ></PostItem>

      <Pagination
        @pageChange="changePage"
        :pages="pages"
        :currentPage="pageNumber + 1"
      ></Pagination>
    </template>
    <template v-else>
      <p>No data</p>
    </template>
  </div>
</template>

<style scoped>
.posts_wrapper {
  margin-top: 12px;
}

.search-post {
  display: flex;
  flex-direction: column;
}

.search-post label {
  margin-bottom: 4px;
}

.posts-filter {
  border-radius: 12px;
  padding: 4px 8px;
}
</style>
