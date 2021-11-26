<template>
  <div class="tile" :class="{ checked: todo.checked }">
    <div class="tile-icon">
      <div
        class="icon"
        :class="todo.checked ? 'icon-check' : 'icon-time'"
      ></div>
    </div>
    <div class="tile-content">
      <p class="tile-title">{{ todo.description }}</p>
    </div>
    <div class="container btn-container">
      <button @click="toggleTodo(todo)" class="btn btn-primary">
        <span v-if="todo.checked">Desmarcar</span>
        <span v-else>Concluído</span>
      </button>
      <div class="div"></div>
      <button @click="removeTodo(todo)" class="btn btn-error">
        <span>Remover</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["toggleTodo", "removeTodo"]),
  },
};
</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: lightgray;
}

.tile {
  padding: 1rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  box-shadow: 0 0.25rem 1rem #e6e6e6;
  margin-bottom: 0.4rem;
}
.div {
  margin: 5px auto;
  width: 100%;
  background-color: transparent;
}

.btn-container {
  width: 50%;
}

.btn {
  width: 100%;
}
</style>