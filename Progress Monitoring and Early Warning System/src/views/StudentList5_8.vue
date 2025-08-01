<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" />
        <span class="font-bold">ธธธธธ <br> <p style="font-size: 0.6rem;">นิสิตปัจจุบัน</p></span>
      </div>
      <Divider />
      <div class="sidebar-content">
        <Router-Link to="/TeachPro" class="sidebar-item">
          <p><i class="pi pi-user"></i>โปรไฟล์</p>
        </Router-Link>

        
          <div class="sidebar-item-header" @click="toggleChevron">
            <p><i class="pi pi-users"></i>นิสิตที่ปรึกษา</p>
            <i class="pi chevron-icon" :class="{ 'pi-chevron-right': !isChevronOpen, 'pi-chevron-down': isChevronOpen }"></i>
          </div>
          <div class="sidebar-subsection" v-show="isChevronOpen">
            <Router-Link to="/StudentList1" class="sidebar-item">
              <p>ปีการศึกษา 1</p>
            </Router-Link>
            <Router-Link to="/StudentList2" class="sidebar-item">
              <p>ปีการศึกษา 2</p>
            </Router-Link>
            <Router-Link to="/StudentList3" class="sidebar-item">
              <p>ปีการศึกษา 3</p>
            </Router-Link>
            <Router-Link to="/StudentList4" class="sidebar-item">
              <p>ปีการศึกษา 4</p>
            </Router-Link>
            <Router-Link to="/StudentList5-8" class="sidebar-item">
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

     
      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">ผลการศึกษา</h2>
     
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isChevronOpen = ref(false);

const toggleChevron = () => {
  isChevronOpen.value = !isChevronOpen.value;
};
const visible = ref(true);
</script>

