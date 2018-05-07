<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex sm12 md4>
        <landing-task-single
          :headers='headers'
          :items="tasksoverdue"
          :allTasks="allTasks"
          :metaData="warning"
        ></landing-task-single>
      </v-flex>
      <v-flex d-flex sm12 md4>
        <landing-task-single
          :headers='headers'
          :items="tasksupcoming"
          :allTasks="allTasks"
          :metaData="upcoming"
        ></landing-task-single>
      </v-flex>
      <v-flex d-flex sm12 md4>
        <landing-task-single
          :headers='headers'
          :items="taskscomplete"
          :allTasks="allTasks"
          :metaData="complete"
        ></landing-task-single>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import LandingTaskSingle from './LandingTaskSingle'

  export default {
    name: 'LandingTasks',
    components: {
      LandingTaskSingle
    },
    computed: {
      tasksoverdue () {
        return this.$store.getters['tasks/tasksoverdue']
      },
      tasksupcoming () {
        return this.$store.getters['tasks/tasksupcoming']
      },
      taskscomplete () {
        return this.$store.getters['tasks/taskscomplete']
      }
    },
    data: function() {
      return {
        warning: {title: 'Tasks Overdue', titleClass: 'display-3 tasknumber white--text tasktitlewrapper warningbackground'},
        upcoming: {title: 'Tasks Upcoming', titleClass: 'display-3 tasknumber white--text tasktitlewrapper upcomingbackground'},
        complete: {title: 'Tasks Complete', titleClass: 'display-3 tasknumber white--text tasktitlewrapper completebackground'},
        allTasks: 50,
        headers: [
          { text: 'Task', value: 'task', align: 'left' },
          { text: 'Date', value: 'date', align: 'left', class: 'hidden-sm-and-down' }
        ]
      }
    }
  }
</script>

<style lang='stylus' scoped>

</style>
