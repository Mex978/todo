<template>
  <div class="column col-4">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">{{ title }}</div>
      </div>
      <div class="panel-body">
        <Todo v-for="todo in this.todos" :todo="todo" :key="todo.id" />
      </div>

      <div class="panel-footer" v-if="this.todos.length > 0">
        <div class="float-right">
          <button
            class="btn btn-link"
            :class="footerOption.isError ? 'text-error' : ''"
            v-for="footerOption in this.footerOptions"
            :key="footerOption.description"
            @click="footerOption.callback"
          >
            {{ footerOption.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "Board",
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    footerOptions: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.column .panel {
  height: 100%;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>