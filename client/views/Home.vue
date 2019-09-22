<template>
  <div class="global-header">
    <a-layout>
      <a-layout-header>
        <a-row>
          <a-col :span="8">
            <img class="logoImg" src="@/assets/deloitte.svg" title="德勤中国" />
          </a-col>
          <a-col :span="8">
            <p class="titelName colorWiart">project-name</p>
          </a-col>
          <a-col :span="8">
            <!-- <p class="deloitte colorWiart">德勤</p> -->
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <a-layout id="components-layout-demo-custom-trigger">
            <a-layout-sider :trigger="null" collapsible v-model="collapsed">
              <!-- <div class="logo">
                  <img v-if="!collapsed" class="" src="@/assets/deloitte.svg" title="德勤中国" />
                  <img v-if="collapsed" class="deloitte-sall" src="@/assets/deloitte-sall.png" title="德勤中国" />
              </div> -->
              <a-menu theme="dark" mode="inline" :openKeys="openKeys" @openChange="onOpenChange" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                  <a-icon type="user" />
                  <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="video-camera" />
                  <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                  <a-icon type="inbox" />
                  <span>Option 3</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                  <span slot="title">
                    <a-icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                  <a-menu-item key="5">Option 5</a-menu-item>
                  <a-menu-item key="6">Option 6</a-menu-item>
                  <a-menu-item key="7">Option 7</a-menu-item>
                  <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                  <span slot="title">
                    <a-icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                  <a-menu-item key="9">Option 9</a-menu-item>
                  <a-menu-item key="10">Option 10</a-menu-item>
                  <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                  </a-sub-menu>
                </a-sub-menu>
              </a-menu>
            </a-layout-sider>
            <a-layout>
              <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                  class="trigger"
                  :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                  @click="()=> collapsed = !collapsed"
                />

                <div class="global-header-right">
                  <a-tooltip class="header-item" title="帮助文档" placement="bottom">
                    <a>
                      <a-icon type="question-circle-o" />
                    </a>
                  </a-tooltip>
                  <!-- <header-notice class="header-item"/> -->
                  <HeaderAvatar class="header-item"></HeaderAvatar>
                </div>
              </a-layout-header>
               <div class="breadcrumb">
                    <a-breadcrumb>
                    <a-breadcrumb-item :key="item.path" v-for="(item, index) in breadcrumb">
                        <span v-if="index === 0"><a href="/">{{item.name}}</a></span>
                        <span v-else>{{item.name}}</span>
                    </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
              <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '69vh' }"
              >
                Content
              
              </a-layout-content>
              <a-layout-footer
                :style="{ textAlign: 'center' }"
              >Project-name ©2019 Created by xxxxxxx</a-layout-footer>
            </a-layout>
          </a-layout>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import HeaderAvatar from "@/components/headerlAvatar";
export default {
  components: {
    HeaderAvatar
  },
  data() {
    return {
      collapsed: false,
      rootSubmenuKeys: ['sub1', 'sub2'],
      openKeys: [],
      breadcrumb: []
    };
  },
  computed: {},
  watch: {}, 
  methods: { 
      onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    getBreadcrumb () {
      this.breadcrumb = this.$route.matched
    }
  },
  created() {},
  mounted() {
      this.getBreadcrumb()
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {
       this.getBreadcrumb()
  },
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='scss' scoped>
.ant-menu-inline .ant-menu-item,.ant-menu-vertical .ant-menu-item{
    margin-top: 0;
}
.deloitte-sall{
    width: 70%;
}
.breadcrumb{
    margin-left: 16px;
    margin-top: 24px;
}
.global-header-right {
  float: right;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: #86bc25;
}
.colorWiart {
  color: #fff;
  font-size: 2rem;
}
.titelName {
  text-align: center;
}
.deloitte {
  text-align: right;
}
.logoImg {
  width: 20%;
}
.ant-layout-header {
  overflow: hidden;
}
.ant-layout-header {
  padding: 0 25px;
}
//@import url(); 引入公共css类
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #000;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #86bc25;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
//   background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
}
</style>