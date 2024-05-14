import { defineStore } from "pinia";

export const useTaskStores = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven", isFav: true },
      // { id: 3, title: "play Gloomhaven", isFav: true },
      // { id: 4, title: "play Gloomhaven", isFav: false },
      // { id: 5, title: "play Gloomhaven", isFav: true },
    ],
  }),
  getters: {
    favs: (state) => state.tasks.filter((task) => task.isFav),
    favCount: (state) =>
      state.tasks.reduce((count, item) => {
        return item.isFav ? count + 1 : count;
      }, 0),

    totalCount: (state) => state.tasks.length,
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      // console.log("Id", id);
      // console.log("Task list ", this.tasks);
      // console.log(
      //   "Task list ",
      //   this.tasks.filter((task) => task.id !== id)
      // );
      this.tasks = this.tasks.filter((task) => task.id !== id);

      console.log("Task list 2 ", this.tasks);
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
