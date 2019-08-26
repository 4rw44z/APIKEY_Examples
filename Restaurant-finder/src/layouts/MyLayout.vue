<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Restaurant Finder
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
    </q-header>
    <q-page-container>
      <LocationContainer />
      <SearchContainer />
    </q-page-container>
  </q-layout>
</template>

<script>
import { QRouteTab, openURL,QAvatar } from 'quasar'
import SearchContainer from '../components/SearchContainer.vue';
import LocationContainer from '../components/LocationContainer.vue';
export default {
  name: 'MyLayout',
  components:{
    SearchContainer,
    LocationContainer,
    QRouteTab,
    QAvatar

  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
