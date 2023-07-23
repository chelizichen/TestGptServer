<template>
    <div class="common-layout">
      <el-container>
        <el-container>
          <el-aside width="200px" style="height: 100vh;">
            <AdminLeft style="height: 100vh;"></AdminLeft>
          </el-aside>
          <el-main>
            <slot></slot>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  import AdminLeft from './left.vue'
  export default {
    components:{
        AdminLeft,
    },
    mounted(){

    },
    methods:{

    }
}
  </script>
  
  <style scoped>
  </style>