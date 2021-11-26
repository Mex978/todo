<template>
  <div class="container-board">
    <div class="columns">
      <Board
        title="Todo"
        :todos="uncheckeds"
        :footerOptions="[
          {
            label: 'Concluir tudo',
            callback: () => toggleAll(true),
          },
        ]"
      />
      <Board
        title="Done"
        :todos="checkeds"
        :footerOptions="[
          {
            label: 'Remover tudo',
            isError: true,
            callback: () => removeAllDone(),
          },
          {
            label: 'Desmarcar tudo',
            callback: () => toggleAll(false),
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
import Board from "./components/Board";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Kanban",
  components: {
    Board,
  },
  computed: {
    ...mapGetters(["uncheckeds", "checkeds"]),
  },
  methods: {
    ...mapActions(["toggleAll", "removeTodo", "removeAllDone"]),
  },
};
</script>

<style scoped>
.container-board {
  height: calc(100vh - 100px);
  padding: 1rem;
}

.columns {
  height: 100%;
}
</style>