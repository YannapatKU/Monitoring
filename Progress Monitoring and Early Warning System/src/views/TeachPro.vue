<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" />
        <span class="font-bold">ธธธธธ</span>
      </div>
      <br>
      <div class="sidebar-content">
        <Router-Link to="/TeachPro" class="sidebar-item">
          <p><i class="pi pi-user"></i>โปรไฟล์</p>
        </Router-Link>

        
          <div class="sidebar-item-header" @click="toggleChevron">
            <p><i class="pi pi-users"></i>นิสิตที่ปรึกษา</p>
            <i class="pi chevron-icon" :class="{ 'pi-chevron-right': !isChevronOpen, 'pi-chevron-down': isChevronOpen }"></i>
          </div>
          <div class="sidebar-subsection" v-show="isChevronOpen">
            <Router-Link to="/StudentList" class="sidebar-item">
              <p>ปีการศึกษา 1</p>
            </Router-Link>
            <Router-Link to="/Advisee/2566" class="sidebar-item">
              <p>ปีการศึกษา 2</p>
            </Router-Link>
            <Router-Link to="/Advisee/2565" class="sidebar-item">
              <p>ปีการศึกษา 3</p>
            </Router-Link>
            <Router-Link to="/Advisee/2564" class="sidebar-item">
              <p>ปีการศึกษา 4</p>
            </Router-Link>
            <Router-Link to="/Advisee/2563" class="sidebar-item">
              <p>ปีการศึกษา 5-8</p>
            </Router-Link>
          </div>

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

const isChevronOpen = ref(false);

const toggleChevron = () => {
  isChevronOpen.value = !isChevronOpen.value;
};
</script>

