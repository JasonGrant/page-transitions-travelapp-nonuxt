<template>
  <v-flex xs12>
    <v-card>
      <v-data-table
          :headers="headers"
          :items="users"
          hide-actions
          class="elevation-0 userManagementDatatable"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="hidden-sm-and-down">{{ props.item.email }}</td>
          <td>{{ props.item.permission }}</td>
          <td class="justify-center layout px-0 hidden-xs-only">
            <v-tooltip right>
              <v-btn icon class="mx-0" slot="activator" @click="editItem(props.item.id)">
                <v-icon dark color="secondary">edit</v-icon>
              </v-btn>
              <span>Edit User</span>
            </v-tooltip>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">
            Sorry, no users have been found with the search <b>{{ search }}</b>.
          </v-alert>
        </template>
      </v-data-table>
      <!-- edit modal -->
      <modal-user-edit
      :permissions="permissions"
      :selectedUser="selectedUser"
      :modalUserEdit.sync="modaluseredit"
    ></modal-user-edit>
    </v-card>
  </v-flex>
</template>

<script>
  import ModalUserEdit from '@/components/modals/ModalUserEdit'

  export default {
    name: '',
    components: {
      ModalUserEdit
    },
    methods: {
      editItem (userId) {
        this.selectedUser = userId;
        this.$data.modaluseredit = true;
      }
    },
    props: {
      users: {
        type: Array,
        required: true
      },
      search: {
        type: String,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    data: function() {
      return {
        modaluseredit: false,
        permissions: [
          'User', 'Manager', 'Administrator'
        ],
        selectedUser: null,
        headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          {
            text: 'Email',
            align: 'left',
            value: 'email',
            class: 'hidden-sm-and-down'
          },
          {
            text: 'Permission',
            align: 'left',
            value: 'permission'
          },
          {
            text: 'Actions',
            align: 'center',
            value: 'name',
            class: 'hidden-xs-only',
            sortable: false
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
