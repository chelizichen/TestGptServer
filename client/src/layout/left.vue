<template>
  <el-row class="tac">
    <el-col>
      <div style="font-size: 20px; text-align: center">贷款信息管理平台</div>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-2" @click="to('/admin/user')">账号管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>

            <span slot="title">贷款管理</span>
          </template>
          <el-menu-item index="2-1" @click="to('/admin/applications')"
            >贷款申请</el-menu-item
          >
          <el-menu-item index="2-2" @click="to('/admin/contracts')"
            >贷款合同</el-menu-item
          >
          <el-menu-item index="2-3" @click="to('/admin/record')"
            >还款记录</el-menu-item
          >
        </el-submenu>
        <!-- <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  mounted() {},
  methods: {
    to(path) {
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped></style>
