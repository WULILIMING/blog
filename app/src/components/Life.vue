<template>
    <div class="life">
        <h1>{{dataA}}</h1>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Life',
    data () {
        return {
            dataA:'',
        }
    },
    mounted () {
        axios.get('/api/')
            .then((res) => {
                this.dataA = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },
}
</script>
<style>

</style>


