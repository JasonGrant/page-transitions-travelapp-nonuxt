<template>
  <div>
    <v-container fluid grid-list-xl text-xs-center>
      <v-layout row wrap justify-space-around>
        <v-flex sm12 md6 lg4>
          <v-text-field
            v-model="search"
            solo
            clearable
            light
            prepend-icon="search"
            placeholder="Search Applications"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <application-tile-single
          v-for="application in filteredApplications" :key="application.name"
          :application="application"
        ></application-tile-single>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ApplicationTileSingle from './applications/ApplicationTileSingle'

  export default {
    name: '',
    components: {
      ApplicationTileSingle
    },
    computed: {
      applications () {
        return this.$store.getters['applications/listApplications']
      },
      searchResult () {
        if (this.search == null) {
          return ''
        } else {
          return this.search
        }
      },
      filteredApplications () {
        return this.applications.filter(application => {
          return application.name.toLowerCase().includes(this.searchResult.toLowerCase())
        })
      }
    },
    data: function() {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
