<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo" />
      <h1>Pinia</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favtasks</button>
    </nav>

    <!-- task list -->
    <transition-group name="list" tag="div" appear>
      <div class="task-list" v-show="filter === 'all'">
        <p>All tasks</p>
        <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
        <div v-for="task in taskStore.tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
    </transition-group>

    <!-- <transition class="animationclass"> -->
    <transition-group name="list" tag="div" appear>
      <div class="task-list" v-show="filter === 'favs'">
        <p>Fovorite Tasks</p>
        <p>You have {{ taskStore.favCount }} tasks in your favs list.</p>
        <div v-for="task in taskStore.favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
    </transition-group>
    <!-- </transition> -->
  </main>
</template>

<script>
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStores } from "./stores/Task.Store";

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStores();

    const filter = ref("all");

    return {
      taskStore,
      filter,
    };
  },
};
</script>

<style>
/* on entering the page  */
.animationclass-enter-from {
  opacity: 0;
}
.animationclass-enter-to {
  opacity: 1;
}
.animationclass-enter-active {
  transition: all 2s ease;
}

/* on Leav ing the page  */
.animationclass-leave-from {
  opacity: 1;
}
.animationclass-leave-to {
  opacity: 0;
}
.animationclass-leave-active {
  transition: all 0.3s ease;
}

/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.4s ease;
  position: absolute; /* for move transition after item leaves */
}
.list-move {
  transition: all 0.3s ease;
}
</style>



