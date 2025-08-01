<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" />
        <span class="font-bold">ธธธธธ</span>
      </div>
      <Divider />
      <div class="sidebar-content">
        <Router-Link to="AdStudent" class="sidebar-item">
          <p ><i class="pi pi-users"></i>รายชื่อนิสิต</p>
        </Router-Link>
        <Router-Link to="/Add" class="sidebar-item">
          <p ><i class="pi pi-star"></i>เพิ่มหลักสูตร</p>
        </Router-Link>
        <Router-Link to="/AdminPro" class="sidebar-item">
          <p ><i class="pi pi-user"></i>โปรไฟล์</p>
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

      
      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">โปรไฟล์ของฉัน</h2>
      <Card style="width: 25rem ;margin: 0 auto; height: 70vh;">
        <template #header>
          <div style="margin-top: 2rem; text-align: center;">
          <Avatar shape="circle" size="xlarge" style="align-items: center;"/>
          </div>
        </template>
        <template #content>
          <div class="profile-details">
            <p><strong>ชื่อ</strong> ชื่อ</p>
            <p><strong>นามสกุล:</strong> นามสกุล</p>
            <p><strong>รหัสนิสิต:</strong> 6xxxxxxxxx</p>
            <p><strong>ชั้นปี:</strong> 3</p>
            <p><strong>คณะ:</strong> วิศวกรรมศาสตร์</p>
            <p><strong>สาขา:</strong> วิศวกรรมคอมพิวเตอร์</p>
          </div>
        </template>
      </Card>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";


const visible = ref(true);
</script>

