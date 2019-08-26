<template>
    <div class="location-wrapper q-pa-lg column items-center">
        <h4 class="q-pb-md">Select Location</h4>
        <div class="location-container row">
            <q-btn 
            icon="my_location"
           @click="getLocation"
            outline
            />
            <q-input outlined />
        </div>
    </div>
</template>
<script>
import {QInput, QBtn} from 'quasar';
export default {
    name:'LocationContainer',
    components: {
        QInput,
        QBtn,
    },
    data(){
        return {
        lat:0,
        long:0
        }
       
    },
    methods:{
        getLocation(){
          
           navigator.geolocation.getCurrentPosition(this.updateLatLong);
        },
        updateLatLong(pos){
              const {latitude,longitude} = pos.coords;
              this.lat = latitude;
              this.long = longitude;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>