<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout row wrap align-content-space-between>
        <v-flex md3 lg4 class="hidden-sm-and-down">
          <div class="headline" style="padding-top:12px;">User Management</div>
        </v-flex>
        <v-flex sm9 md6 lg4>
          <v-text-field
            v-model="search"
            solo
            clearable
            light
            prepend-icon="search"
            placeholder="Search Users"
          ></v-text-field>
        </v-flex>
        <v-flex sm3 md3 lg4 class="hidden-xs-only">
          <v-btn
            color="secondary"
            style="float:right;"
            outline
            dark
            v-on:click="modaluseradd = !modaluseradd"
          >
            <v-icon>add</v-icon>
            Add User
          </v-btn>
        </v-flex>
        <users-data-table
          :item.sync="item"
          :users="filteredUsers"
          :search="searchResult"
          :modaluseradd="modaluseradd"
          @getUser="alert('boosh')"
        ></users-data-table>
      </v-layout>
    </v-container>
    <v-snackbar
      :timeout="timeout"
      color='warning'
      v-model="snackbarRemoveUser"
    >
      {{ text }}
      <v-btn dark flat outline @click.native="snackbarRemoveUser = false">Undo</v-btn>
    </v-snackbar>
    <modal-user-add
      :modalUserAdd.sync="modaluseradd"
      :employees="employees"
      :permissions="permissions"
    ></modal-user-add>
  </div>
</template>

<script>
  import UsersDataTable from './usermanagement/UsersDataTable'
  import ModalUserAdd from '@/components/modals/ModalUserAdd'

  export default {
    name: '',
    components: {
      ModalUserAdd,
      UsersDataTable
    },
    computed: {
      employees () {
        return this.$store.getters['users/getEmployees']
      },
      users () {
        return this.$store.getters['users/listUsers']
      },
      searchResult () {
        if (this.search == null) {
          return ''
        } else {
          return this.search
        }
      },
      filteredUsers () {
        return this.users.filter(user => {
          return user.name.toLowerCase().includes(this.searchResult.toLowerCase())
        })
      }
    },
    methods: {},
    data: function() {
      return {
        modaluseradd: false,
        search: '',
        snackbarRemoveUser: false,
        timeout: 6000,
        text: 'User has been removed.',
        item: {
          id: 0,
          name: '',
          email: '',
          permission: ''
        },
        permissions: [
          'User', 'Manager', 'Administrator'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
