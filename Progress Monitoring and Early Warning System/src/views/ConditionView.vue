<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" class="pi pi-user"/>
        <span class="font-bold">ธธธธธ <br> <p style="font-size: 0.6rem;">นิสิตปัจจุบัน</p></span>
      </div>
      <Divider />
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

      <div class="scrollable">
      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">ตรวจสอบเงื่อนไขการจบการศึกษา</h2>
      
      <div class="white-container" style="display: flex; justify-content: space-between; ">
          <span>ชื่อหลักสูตร</span>
          <span >11103 - หลักสูตรวิทยาศาสตร์บัณฑิต สาขาเทคโนโลยีสารสนเทศ 2564</span>
      </div>

      <div class="white-container" style="display: flex; justify-content: space-between; ">
          <span>ชื่อหลักสูตร</span>
          <span>11103 - หลักสูตรวิทยาศาสตร์บัณฑิต สาขาเทคโนโลยีสารสนเทศ 2564</span>
      </div>

      
      <div class="white-container">
        <table style="width: 100%; border-collapse: collapse; ">
          <thead>
            <tr style="font-weight: bold;">
              <th style="text-align: left;">โครงสร้างหลักสูตร</th>
              <th style="text-align: center; padding: 0.75rem 0.5rem;">จำนวนหน่วยกิต</th>
              <th style="text-align: center; padding: 0.75rem 0.5rem;">จำนวนหน่วยกิตที่ทำได้</th>
              <th style="text-align: center; padding: 0.75rem 0.5rem;">จำนวนหน่วยกิตที่ขาด</th>
              <th style="text-align: center; padding: 0.75rem 0.5rem;">จำนวนหน่วยกิตที่ทำเกิน</th>
              <th style="text-align: center; padding: 0.75rem 0.5rem;">Pre-Co</th>
              <th style="text-align: center; padding: 0.75rem 0.5rem;">เกรดที่ได้</th>
            </tr>
          </thead>

        <tbody>
          <tr @click="showSubTable = !showSubTable" style="cursor: pointer;">
            <td>
               1.หมวดวิชาพื้นฐาน
              <i :class="['pi', showSubTable ? 'pi-chevron-down' : 'pi-chevron-right']" style="margin-right: 0.5rem;"></i>
             
            </td>
            <td style="text-align: center; padding: 0.75rem 0.5rem;">30</td>
            <td style="text-align: center; padding: 0.75rem 0.5rem;">28</td>
            <td style="text-align: center; padding: 0.75rem 0.5rem;">2</td>
            <td style="text-align: center; padding: 0.75rem 0.5rem;">0</td>
            <td style="text-align: center; padding: 0.75rem 0.5rem;">-</td>
            <td style="text-align: center; padding: 0.75rem 0.5rem;">B+</td>
          </tr>
      <tr v-if="showSubTable">
    <td colspan="7">
      <table style="width: 100%; border-collapse: collapse; background-color: #fafafa; margin-top: 1rem;">
        <thead>
          <tr>
            <th style="text-align: left;">1.1.กลุ่มอยู่ดีมีสุข</th>

          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
      </table>
</div>

      
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";


const visible = ref(true);
const showSubTable = ref(false);
</script>

<style scoped>
.scrollable {
  overflow-y: auto; /* ทำให้ scroll ได้ทั้งหน้า */
}

.white-container {
  width: 90%;
  margin: 2rem auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
}
</style>