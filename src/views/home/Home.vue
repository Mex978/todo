<template>
  <div class="container grid-xs py-2">
    <form @submit.prevent="add(todo)">
      <div class="input-group">
        <input
          type="text"
          class="form-input"
          placeholder="Novo todo"
          v-model="todo.description"
        />
        <button class="btn btn-primary input-group-btn" :class="{ loading }">
          Adicionar
        </button>
      </div>
    </form>
    <div class="todo-list">
      <Todo v-for="t in todos" :key="t.id" :todo="t" />
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Todo,
  },
  data() {
    return {
      todo: {
        checked: false,
      },
    };
  },
  computed: {
    ...mapState(["todos", "loading"]),
  },
  methods: {
    ...mapActions(["addTodo"]),

    async add(todo) {
      await this.addTodo(todo);
      this.todo = { checked: false };
    },
  },
};
</script>

<style scoped>
.todo-list {
  padding-top: 2rem;
}

.container {
  margin-top: 1rem;
}
</style>