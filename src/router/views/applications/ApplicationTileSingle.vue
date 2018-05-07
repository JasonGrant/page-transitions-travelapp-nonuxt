<template>
  <v-flex xs12 lg6 xl4>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex sm4 class="hidden-xs-only">
            <v-card-media
              :src="application.screenshot"
              height="180px"
              contain
            ></v-card-media>
          </v-flex>
          <v-flex xs12 sm8>
            <div>
              <div class="headline">{{application.name}}</div>
              <div>Members: <b>{{application.members.length}}</b></div>
              <div>Business Owner: <b>{{application.businessOwner}}</b></div>
              <div>Technical Owner: <b>{{application.technicalOwner}}</b></div>
              <div>
                <v-chip
                  v-for="tag in application.tags" :key="tag"
                  dark
                  color="secondary"
                  outline
                  disabled
                >
                  {{tag}}
                </v-chip>
              </div>
            </div>
          <v-card-actions>
            <v-btn @click.native="showDetail" flat>
              Learn More
              <v-icon>{{ showDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="inArray(user, application.members) == true" flat color="secondary">Leave</v-btn>
            <v-btn v-else-if="isOpen(application.access) == true" flat color="info">Join</v-btn>
            <v-btn v-else-if="isClosed(application.access) == true" flat color="warning">Request Access</v-btn>
            <v-btn v-else-if="isBlocked(application.access) == true" flat color="error">Restricted</v-btn>
          </v-card-actions>
          </v-flex>
          <v-slide-y-transition>
            <v-card-text v-show="showDetails">
              {{application.description}}
            </v-card-text>
          </v-slide-y-transition>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'ApplicationTileSingle',
    props: {
      application: {
        type: Object,
        required: true
      }
    },
    computed: {
      user () {
        return this.$store.getters['users/getUser']
      }
    },
    methods: {
      inArray: function (user, members) {
        var length = members.length
        for (var i = 0; i < length; i++) {
          if (members[i] === user) return true
        }
        return false
      },
      isOpen: function (access) {
        if (access === 'open') return true
        else return false
      },
      isClosed: function (access) {
        if (access === 'closed') return true
        else return false
      },
      isBlocked: function (access) {
        if (access === 'blocked') return true
        else return false
      },
      showDetail: function () {
        this.showDetails = !this.showDetails
      }
    },
    data: function() {
      return {
        showDetails: false
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
