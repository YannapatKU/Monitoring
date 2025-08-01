<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" />
        <span class="font-bold">ธธธธธ</span>
      </div>
      <br>
      <div class="sidebar-content">
        <Router-Link to="/profile" class="sidebar-item">
          <p ><i class="pi pi-user"></i>โปรไฟล์</p>
        </Router-Link>
        <Router-Link to="/Education" class="sidebar-item">
          <p><i class="pi pi-graduation-cap"></i>ผลการศึกษา</p>
        </Router-Link>
        <Router-Link to="/Overall" class="sidebar-item">
          <p><i class="pi pi-file"></i>สถิติ</p>
        </Router-Link>
        <Router-Link to="/Table" class="sidebar-item">
          <p><i class="pi pi-table"></i>ตารางหลักสูตรของนิสิต</p>
        </Router-Link>
        <Router-Link to="/Condition" class="sidebar-item">
          <p><i class="pi pi-book"></i>ตรวจสอบเงื่อนไขจบการศึกษา</p>
        </Router-Link>
      </div>
    </aside>

    <div class="content-wrapper">
      <nav class="navbar-top">
        <Button icon="pi pi-bars" @click="visible = !visible" />
        <div class="navbar-title">ระบบติดตามสถานะการเรียน</div>
        <div class="navbar-right">
          <span>ชื่อผู้ใช้</span>
          <Router-Link to="/"> 
          <Button icon="pi pi-power-off" style="background-color: #02BC77; border: none;"/>
          </Router-Link>
        </div>
      </nav>

      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">ตรวจสอบเงื่อนไขการจบการศึกษา</h2>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";


const visible = ref(true);
</script>