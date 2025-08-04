<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" class="pi pi-user"/>
        <span class="font-bold">ธธธธธ <br> <p style="font-size: 0.6rem;">นิสิตปัจจุบัน</p></span>
      </div>
      <Divider />
      <div class="sidebar-content">
        <Router-Link to="StudentCourse" class="sidebar-item">
          <p ><i class="pi pi-users"></i>รายชื่อนิสิต</p>
        </Router-Link>
        <Router-Link to="/CourseCreate" class="sidebar-item">
          <p ><i class="pi pi-star"></i>เพิ่มหลักสูตร</p>
        </Router-Link>
        <Router-Link to="/CoursePro" class="sidebar-item">
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

      
      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">โปรไฟล์</h2>
      <Card style="width: 25rem ;margin: 0 auto; height: 70vh;">
        <template #header>
          <div style="margin-top: 2rem; text-align: center;">
          <Avatar shape="circle" size="xlarge" style="align-items: center;" class="pi pi-user"/>
          </div>
        </template>
        <template #content>
          <div class="profile-details">
            <p><strong>ชื่อ</strong><br>นาย ชื่อ</p>
            <p><strong>นามสกุล:</strong><br> นามสกุล</p>
            <p><strong>รหัสประจำตัว:</strong><br> 6xxxxxxxxx</p>
            <p><strong>เพศ:</strong><br> ชาย</p>
            <p><strong>เบอร์โทรศัพท์:</strong><br> 012-3456789</p>
            <p><strong>คณะ:</strong><br> วิศวกรรมศาสตร์</p>
            <p><strong>สาขา:</strong><br> วิศวกรรมคอมพิวเตอร์</p>
            <p><strong>สถานะ:</strong><br> อาจารย์</p>
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

