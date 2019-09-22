<template>
  <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial" >
    <span style="cursor: pointer; padding:0 24px">
      <a-avatar class="avatar" size="small" shape="circle" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569164787117&di=a58d96256ad6f8ec8e2d1e8b884052aa&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f8bc55bee47e32f87528a1e91eeb.jpg"/>
      <span>leihuang</span>
    </span>
    <a-menu style="width: 150px" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <router-link to="/login">
          <a-icon type="poweroff" />
          <span>退出登录</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'HeaderAvatar',
  computed: {
    currUser () {
      return this.$store.state.account.user
    }
  }
}
</script>

<style lang="scss" scoped>
  .avatar{
    margin: 20px 4px 20px 0;
    color: #1890ff;
    background: hsla(0,0%,100%,.85);
    vertical-align: middle;
  }
</style>
