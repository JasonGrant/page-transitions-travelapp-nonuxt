<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap justify-space-around class="mb-4">
        <v-flex xs12>
          <v-toolbar dark color="primary" extended>
            <v-toolbar-title class="white--text subheading" style="font-weight:300"><span class="headline">{{iconsFiltered.length}}</span> &nbsp; Icons Shown</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              prepend-icon="search"
              clearable
              label="Search Icons"
              solo-inverted
              class="mx-3"
              flat
              style="width:400px;"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-menu bottom left :close-on-content-click="false" :nudge-width="300" v-model="menu">
              <v-btn slot="activator" flat outline color="white" class="mr-3">
                <v-icon>mdi-filter-outline</v-icon>
                &nbsp;
                Add Filter(s)
              </v-btn>
              <v-card>
                <v-card-title class="title">Select Tags to Filter Icons</v-card-title>
                <v-card-text>
                  <template v-for="tag in tags">
                    <v-chip 
                      @click="toggleTag(tag)"
                      :color="tag.active == false ? 'secondary lighten-2' : 'primary'"
                      small
                      text-color="white"
                      :key="tag.text"
                    >
                      {{tag.text}}
                    </v-chip>
                  </template>
                </v-card-text>
              </v-card>
            </v-menu>
            <div slot="extension" style="width:100%;display:flex;flex-direction:row;justify-content:space-between;">
              <v-toolbar-title class="white--text subheading" style="font-weight:300">Filters Applied:
              <span>
                <template v-for="tag in tagsFiltered">
                  <v-chip close small :key="tag.text" @input="toggleTag(tag)">
                    {{tag.text}}
                  </v-chip>
                </template>
              </span>
              </v-toolbar-title>
              <v-btn v-if="tagsFiltered.length > 0" @click="toggleAll()" flat outline color="white" class="mr-3">
                <v-icon>mdi-filter-remove-outline</v-icon>
                &nbsp;
                Clear All Filter(s)
              </v-btn>
            </div>
          </v-toolbar>
        </v-flex>
      </v-layout>
      <v-data-iterator
        content-tag="v-layout"
        row
        wrap
        :items="iconsFiltered"
        :search="search"
        :custom-filter="customFilter"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
      >
        <v-flex
          slot="item"
          slot-scope="props"
          d-flex
          xs6
          sm4
          md3
          lg2
          xl1
        >
          <v-card class="text-xs-center pt-3" :key="props.item.name">
            <v-icon large class="mb-2">{{props.item.name}}</v-icon>
            <p class="caption">{{props.item.name}}</p>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Icons',
    computed: {
      icons () {
        return this.$store.getters['icons/getIcons']
      },
      tags () {
        return this.$store.getters['icons/getAllTags']
      },
      tagsFiltered () {
        return this.tags.filter(tag => {
          if (tag.active === true) {
            return tag
          }
        })
      },
      searchText () {
        if (this.search === null) {
          return '';
        } else {
          return this.search;
        }
      },
      searchedIcons () {
        return this.icons.filter(icon => {
          return icon.name.toLowerCase().includes(this.searchText.toLowerCase())
        })
      },
      iconsFiltered () {
        let sIcons = this.searchedIcons
        let tagF = this.tagsFiltered

        if (tagF.length) {
          sIcons = sIcons.filter(icon => tagF.some(filter => icon.name.includes(filter.text)))
          console.log(sIcons = sIcons.filter(icon => tagF.some(filter => icon.name.includes(filter.text))))
        }
        return sIcons
      }
    },
    methods: {
      customFilter(items, search, filter) {
        search = search.toString().toLowerCase()
        // return items.filter(row => filter(row["text"] + row["title"], search))
        return items.filter(row => filter(row["name"], search))
      },
      toggleTag: function(tag) {
          this.$store.dispatch("icons/toggleTag", tag)
      },
      toggleAll: function() {
          this.$store.dispatch("icons/toggleAll")
      }
    },
    data: function() {
      return {
        search: '',
        rowsPerPageItems: [24, 48, 72,{"text":"All","value":-1}],
        pagination: {
          rowsPerPage: 24
        },
        menu: false,
        invites: false
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
