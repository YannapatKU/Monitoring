<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" class="pi pi-user" />
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

      
    <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">รายชื่อนิสิต</h2>
      
    <IconField style="width: 90%; margin: 0 auto;">
        <InputIcon class="pi pi-search" />
        <InputText placeholder="ค้นหา (ชื่อวิชา, รหัสวิชา)" style="border-radius: 100px; width: 100%;" />
    </IconField>

    <div style="text-align: left; margin-left: 4.5rem; margin-top: 2rem;">
    <Chip label="ปีการศึกษาที่ 1" style="background-color: green; color: white; margin: 0 auto; margin-bottom: 2rem;" />
        <DataTable :value="students" showGridlines tableStyle="width: 90%;">
          <Column field="studentId" header="รหัสนิสิต"></Column>
          <Column field="fullName" header="ชื่อ-นามสกุล"></Column>
          <Column field="academicYear" header="ปีการศึกษา"></Column>
          <Column field="semester" header="ภาค"></Column>
          <Column field="phoneNumber" header="เบอร์โทรศัพท์"></Column>
          <Column field="schedule" header="ตาราง">
            <template #body>
              <Button icon="pi pi-eye" label="ดูตาราง" style="background-color: #02BC77; border-radius: 50px; color: white; border: none; padding: 0.5rem 1rem;" />
            </template>
          </Column>
        </DataTable>
    </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";


const visible = ref(true);

const students = ref([
  {
    studentId: '65012345',
    fullName: 'สมชาย รักเรียน',
    academicYear: 'ปีการศึกษาที่ 1',
    semester: 'ภาคต้น',
    phoneNumber: '081-123-4567',
    schedule: '' 
  },
  {
    studentId: '65012346',
    fullName: 'สมหญิง ตั้งใจ',
    academicYear: 'ปีการศึกษาที่ 1',
    semester: 'ภาคต้น',
    phoneNumber: '082-987-6543',
    schedule: ''
  },
  {
    studentId: '65012347',
    fullName: 'วีระ ชนะเลิศ',
    academicYear: 'ปีการศึกษาที่ 2',
    semester: 'ภาคปลาย',
    phoneNumber: '090-111-2222',
    schedule: ''
  },
  {
    studentId: '65012348',
    fullName: 'อรุณา เบิกบาน',
    academicYear: 'ปีการศึกษาที่ 2',
    semester: 'ภาคปลาย',
    phoneNumber: '065-333-4444',
    schedule: ''
  },
  {
    studentId: '65012349',
    fullName: 'ชลิดา สดใส',
    academicYear: 'ปีการศึกษาที่ 1',
    semester: 'ภาคฤดูร้อน',
    phoneNumber: '089-555-6666',
    schedule: ''
  }
]);

</script>

