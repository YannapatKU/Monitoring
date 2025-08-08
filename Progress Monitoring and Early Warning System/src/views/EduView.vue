<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" class="pi pi-user" />
        <span class="font-bold">ธธธธธ <br> <p style="font-size: 0.6rem;">นิสิตปัจจุบัน</p></span>
      </div>
      <Divider />
      <div class="sidebar-content">
        <Router-Link to="/profile" class="sidebar-item">
          <p><i class="pi pi-user"></i>โปรไฟล์</p>
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
            <Button icon="pi pi-power-off" style="background-color: #02BC77; border: none;" />
          </Router-Link>
        </div>
      </nav>

     <div class="scrollable">
      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem;">ผลการศึกษา</h2>

      <IconField style="width: 90%; margin: 0 auto;">
        <InputIcon class="pi pi-search" />
        <InputText placeholder="ค้นหา (ชื่อวิชา, รหัสวิชา)" style="border-radius: 100px; width: 100%;" />
      </IconField>

      <div style="width: 90%; margin: 2rem auto;">
        <table class="overall-table">
          <thead>
            <tr>
              <th>หน่วยกิตสะสม</th>
              <th>เกรดเฉลี่ยสะสม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>120</td>
              <td>3.45</td>
            </tr>
          </tbody>
        </table>

        <div class="grade-container">
          <div class="container-4grid" v-for="i in 20" :key="i">
            <div>02739322</div>
            <div>3 หน่วยกิต</div>
            <div>การวิเคราะห์และออกแบบระบบสารสนเทศ<br>Information System Analysis and Design</div>
            <div>A</div>
          </div>
        </div>
      </div>
    </div>
      
      

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const visible = ref(true);
</script>

<style scoped>
.overall-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.overall-table th {
  background-color: #02BC77;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  
}

.overall-table td {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 2rem;
}

.grade-container {
  width: 100%;
  margin: 2rem auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.container-4grid {
  display: grid;
  grid-template-columns: 1fr 1fr 6fr 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
}

.scrollable {
  overflow-y: auto; /* ทำให้ scroll ได้ทั้งหน้า */
}

</style>
