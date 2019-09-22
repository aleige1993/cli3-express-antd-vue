<template>
    <div class="about">
        <ul>
          <li v-for="(item,index) in userInfo"  :key="index">
            {{item}}
          </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'about',
    components: {},
    data() {
        return {
          userInfo:''
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    async mounted() {
      let res = await this.$http.get('/userInfo/userName',{
        code: '001'
      })
      this.$data.userInfo = res.body;
    },
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    }
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
