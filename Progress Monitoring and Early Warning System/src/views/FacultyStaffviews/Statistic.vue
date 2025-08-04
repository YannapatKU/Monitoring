<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" class="pi pi-user" />
        <span class="font-bold">ธธธธธ <br> <p style="font-size: 0.6rem;">นิสิตปัจจุบัน</p></span>
      </div>
      <Divider />
      <div class="sidebar-content">
        <Router-Link to="Statistic" class="sidebar-item">
          <p><i class="pi pi-users"></i>สถิติ</p>
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

      <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem;">Dashboard</h2>

      <div style="display: flex; justify-content: center; align-items: flex-start;">
        <table style="width: 60%; border-collapse: collapse; margin-bottom: 2rem;" border="1">
          <thead>
            <tr style="background-color: #d3d3d3;">
              <th style="padding: 0.5rem;">วิชา</th>
              <th style="padding: 0.5rem;">ปีการศึกษา</th>
              <th style="padding: 0.5rem;">ภาคเรียน</th>
              <th style="padding: 0.5rem;">รหัสนิสิต</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.5rem;">
                <AutoComplete v-model="selectedSubject" :suggestions="filteredSubjects"
                  @complete="searchSubjects" placeholder="ค้นหาวิชา..." />
              </td>
              <td style="padding: 0.5rem;">
                <input type="text" v-model="academicYear" placeholder="2566" />
              </td>
              <td style="padding: 0.5rem;">
                <Select v-model="selectedSemester" :options="semesters" placeholder="เลือกภาคเรียน" />
              </td>
              <td style="padding: 0.5rem;">
                <input type="text" v-model="studentCode" maxlength="2" style="width: 100%;" />
              </td>
            </tr>
          </tbody>
        </table>

        <div style="margin-left: 2rem; display: flex; align-items: center;">
          <Button icon="pi pi-search" label="ค้นหา"
            style="background-color: #02BC77; border-radius: 50px; color: white;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";


const visible = ref(true);

// วิชา: สำหรับ autocomplete
const subjects = ref(["คณิตศาสตร์", "ฟิสิกส์", "วิทยาการคอมพิวเตอร์", "ภาษาอังกฤษ"]);
const filteredSubjects = ref([]);
const selectedSubject = ref('');

const searchSubjects = (event) => {
  const query = event.query.toLowerCase();
  filteredSubjects.value = subjects.value.filter(subj =>
    subj.toLowerCase().includes(query)
  );
};

// ปีการศึกษา
const academicYear = ref('');

// ภาคเรียน
const semesters = ref(["ต้น", "ปลาย", "ฤดูร้อน"]);
const selectedSemester = ref(null);

// รหัสนิสิต 2 หลัก
const studentCode = ref('');
</script>
