<template>
  <Transition>
    <div class="task">
      <h3>
        {{ task.title }}
      </h3>
      <div class="icons">
        <i class="material-icons" @click="taskStore.deleteTask(task.id)"
          >delete</i
        >
        <i
          class="material-icons"
          :class="{ active: task.isFav }"
          @click="taskStore.toggleFav(task.id)"
          >favorite</i
        >
      </div>
    </div>
  </Transition>
</template>

<script>
import { useTaskStores } from "@/stores/Task.Store";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStores();

    return { taskStore };
    // return { toggleFav: taskStore.toggleFav, deleteTask: taskStore.deleteTask };
  },
};
</script>