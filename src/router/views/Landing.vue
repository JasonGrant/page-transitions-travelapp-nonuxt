<template>
  <div>
    <landing-tasks></landing-tasks>
    <v-container fluid grid-list-xl>
      <v-layout row wrap justify-center>
        <v-btn
          color="secondary"
          dark
          v-on:click="addTask = !addTask"
        >
          <v-icon>add</v-icon> Add Task
        </v-btn>
      </v-layout>
    </v-container>
    <modal-add-task :modalAddTask.sync="addTask"></modal-add-task>
  </div>
</template>

<script>
  import LandingTasks from './landing/LandingTasks'
  import ModalAddTask from '@/components/modals/ModalAddTask'

  export default {
    name: 'Landing',
    components: {
      LandingTasks,
      ModalAddTask
    },
    data: function() {
      return {
        addTask: false
      }
    }
  }
</script>

<style lang='stylus' scoped>

</style>
