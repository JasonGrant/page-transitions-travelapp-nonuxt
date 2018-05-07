<template>
  <v-card class="landingtasks">
    <v-card-title :class="metaData.titleClass">
      <div>{{items.length}}</div>
      <div class="title taskpercentage">{{percentageOfTasks(items, allTasks)}}%</div>
      <div class="headline tasktitle">{{metaData.title}}</div>
    </v-card-title>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="items"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.task }}</td>
          <td class="hidden-xs-only">{{ props.item.date }}</td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="secondary" icon="warning">
            Sorry, nothing to display here :(
          </v-alert>
        </template>
      </v-data-table>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'LandingTaskSingle',
    props: ['items', 'headers', 'allTasks', 'metaData'],
    data: function() {
      return {
      }
    },
    methods: {
      percentageOfTasks (items, allTasks) {
        return parseInt(items.length / allTasks * 100)
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .tasktitlewrapper {
    display: flex;
    justify-content: space-around;
  }
  .taskpercentage, .tasktitle {
    font-family: 'Roboto Condensed', 'Roboto', sans-serif;
  }
  .taskpercentage {
    padding: 3px 11px;
    background-color: rgba(255,255,255,0.3);
    border: none;
    border-radius: 21px;
  }
  .tasktitle {
    font-weight: 300;
  }
  .warningbackground {
    background-color: #c94a4e;
  }
  .upcomingbackground {
    background-color: #5c5c5a;
  }
  .completebackground {
    background-color: #47959f;
  }
</style>
