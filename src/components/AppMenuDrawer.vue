<template>
  <transition
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false">
    <div class="menudrawer" v-if="menuOpened">
      <router-link to="/" @click.native="updateHeaderIndex()" class="menuitem">{{ selectedUser.name | firstName }}'s Home</router-link>
      <router-link to="/place" @click.native="updateHeaderPlace()" class="menuitem">{{ selectedUser.name | firstName }}'s Places</router-link>
      <router-link to="/group" @click.native="updateHeaderGroup()" class="menuitem">{{ selectedUser.name | firstName }}'s Group Trips</router-link>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, Sine } from 'gsap'

export default {
  props: {
    menuOpened: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeEnter(el) {
      TweenMax.set(el, {
        opacity: 0,
        scale: 0,
        transformOrigin: '100% 0%'
      })
      TweenMax.set(el.childNodes, {
        opacity: 0
      })
    },
    enter(el, done) {
      TweenMax.fromTo(
        el,
        0.2,
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          ease: Sine.easeOut
        }
      )
      TweenMax.staggerFromTo(
        el.childNodes,
        0.45,
        {
          opacity: 0
        },
        {
          delay: 0.1,
          opacity: 1,
          ease: Sine.easeOut
        },
        0.04
      )
      done()
    },
    updateHeaderIndex() {
      this.$store.dispatch("setHeaderIndex")
    },
    updateHeaderGroup() {
      this.$store.dispatch("setHeaderGroup")
    },
    updateHeaderPlace() {
      this.$store.dispatch("setHeaderPlace")
    }
  },
  computed: {
    ...mapGetters(['selectedUser'])
  },
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  }
}
</script>

<style scoped>
.menudrawer {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.8);
  line-height: 2.2;
  text-align: right;
  position: absolute;
  right: 0px;
  top: 45px;
  padding: 11px 0;
  border-radius: 4px;
  z-index: 10000;
}

.menuitem {
  padding: 0 20px;
}

.menuitem:hover {
  background: rgba(165, 165, 165, 0.6);
}

.router-link-exact-active {
  font-weight: bold;
}

a,
a:visited,
a:active {
  color: white;
}
</style>