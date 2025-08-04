<template>
    <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" />
        <span class="font-bold">ธธธธธ <br> <p style="font-size: 0.6rem;">อาจารย์ระดับคณะ</p></span>
      </div>
      <Divider />
      <div class="sidebar-content">
        <Router-Link to="/TeachField" class="sidebar-item">
          <p><i class="pi pi-user"></i>โปรไฟล์</p>
        </Router-Link>

        
        <div class="sidebar-item-header" @click="toggleChevron">
            <p><i class="pi pi-users"></i>นิสิตที่ปรึกษา</p>
            <i class="pi chevron-icon" :class="{ 'pi-chevron-right': !isChevronOpen, 'pi-chevron-down': isChevronOpen }"></i>
        </div>

        <div class="sidebar-subsection" v-show="isChevronOpen">
            <Router-Link to="/FieldStudentList1" class="sidebar-item">
              <p>ปีการศึกษา 1</p>
            </Router-Link>
            <Router-Link to="/FieldStudentList2" class="sidebar-item">
              <p>ปีการศึกษา 2</p>
            </Router-Link>
            <Router-Link to="/FieldStudentList3" class="sidebar-item">
              <p>ปีการศึกษา 3</p>
            </Router-Link>
            <Router-Link to="/FieldStudentList4" class="sidebar-item">
              <p>ปีการศึกษา 4</p>
            </Router-Link>
            <Router-Link to="/FieldStudentList5-8" class="sidebar-item">
              <p>ปีการศึกษา 5-8</p>
            </Router-Link>
        </div>

        <div class="sidebar-item-header" @click="toggleChevronChair">
            <p><i class="pi pi-users"></i>นิสิตในคณะ</p>
            <i class="pi chevron-icon" :class="{ 'pi-chevron-right': !isChevronChairOpen, 'pi-chevron-down': isChevronChairOpen }"></i>
        </div>

        <div class="sidebar-subsection" v-show="isChevronChairOpen">
            <Router-Link to="/HeadField" class="sidebar-item">
              <p>สาขาเทคโนโลยีสารสนเทศ</p>
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


        <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">นิสิตที่ปรึกษาปีที่ 4</h2>
        <IconField style="width: 90%; margin: 0 auto;">
        <InputIcon class="pi pi-search" />
        <InputText placeholder="ค้นหา (ชื่อ-นามสกุล, รหัสนิสิต)" style="border-radius: 100px; width: 100%;" />
        </IconField>

        <div style="text-align: left; margin-left: 4.5rem; margin-top: 2rem;">
        <Chip label="ภาคปกติ" style="background-color: green; color: white; margin: 0 auto; margin-bottom: 0.5rem; height: 2rem;" />
            <DataTable :value="studentsNY4" showGridlines tableStyle="width: 90%;">
                <Column field="studentId" header="รหัสนิสิต"></Column>
                <Column field="fullName" header="ชื่อ-นามสกุล"></Column>
                <Column field="semester" header="ภาค"></Column>
                <Column field="phoneNumber" header="เบอร์โทรศัพท์"></Column>
                <Column field="schedule" header="ตาราง">
                  <template #body>
                  <Button icon="pi pi-eye" label="ดูตาราง" style="background-color: #02BC77; border-radius: 50px; color: white; border: none; padding: 0.5rem 1rem;" />
                  </template>
                </Column>
                
                <Column field="Grade" header="ผลการเรียน">
                  <template #body>
                  <Button icon="pi pi-eye" label="ดูตาราง" style="background-color: #02BC77; border-radius: 50px; color: white; border: none; padding: 0.5rem 1rem;" />
                  </template>
                </Column>
            </DataTable>


        <Chip label="ภาคพิเศษ" style="background-color: green; color: white; margin: 0 auto; margin-bottom: 0.5rem; margin-top: 1.5rem; height: 2rem;" />
           <DataTable :value="studentsNY4" showGridlines tableStyle="width: 90%;">
                <Column field="studentId" header="รหัสนิสิต"></Column>
                <Column field="fullName" header="ชื่อ-นามสกุล"></Column>
                <Column field="semester" header="ภาค"></Column>
                <Column field="phoneNumber" header="เบอร์โทรศัพท์"></Column>
                <Column field="schedule" header="ตาราง">
                  <template #body>
                  <Button icon="pi pi-eye" label="ดูตาราง" style="background-color: #02BC77; border-radius: 50px; color: white; border: none; padding: 0.5rem 1rem;" />
                  </template>
                </Column>
                
                <Column field="Grade" header="ผลการเรียน">
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

const isChevronOpen = ref(false);
const isChevronChairOpen = ref(false);

const toggleChevron = () => {
  isChevronOpen.value = !isChevronOpen.value;
};

const toggleChevronChair = () => {
  isChevronChairOpen.value = !isChevronChairOpen.value;
};

</script>

