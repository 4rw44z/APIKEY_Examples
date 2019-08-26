<template>
 <div class="search-container column q-pa-lg">
     <h3 class="">Find Your Restaurant</h3>
     <div class="input-box-container">
         <q-input outlined/>
     </div>
</div> 
</template>

<script>
import {QInput} from 'quasar';
export default {
    name:'SearchContainer',
    components: {
         QInput,
    }
}
</script>
<style lang="stylus" scoped>

</style>