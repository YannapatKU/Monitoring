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
            <Router-Link to="/LectStudentList1" class="sidebar-item">
              <p>ปีการศึกษา 1</p>
            </Router-Link>
            <Router-Link to="/LectStudentList2" class="sidebar-item">
              <p>ปีการศึกษา 2</p>
            </Router-Link>
            <Router-Link to="/LectStudentList3" class="sidebar-item">
              <p>ปีการศึกษา 3</p>
            </Router-Link>
            <Router-Link to="/LectStudentList4" class="sidebar-item">
              <p>ปีการศึกษา 4</p>
            </Router-Link>
            <Router-Link to="/LectStudentList5-8" class="sidebar-item">
              <p>ปีการศึกษา 5-8</p>
            </Router-Link>
        </div>

        <div class="sidebar-item-header" @click="toggleChevronChair">
            <p><i class="pi pi-users"></i>นิสิตในคณะ</p>
            <i class="pi chevron-icon" :class="{ 'pi-chevron-right': !isChevronChairOpen, 'pi-chevron-down': isChevronChairOpen }"></i>
        </div>

        <div class="sidebar-subsection" v-show="isChevronChairOpen">
            <Router-Link to="/HeadLect" class="sidebar-item">
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

const isChevronOpen = ref(false);
const isChevronChairOpen = ref(false);

const toggleChevron = () => {
  isChevronOpen.value = !isChevronOpen.value;
};

const toggleChevronChair = () => {
  isChevronChairOpen.value = !isChevronChairOpen.value;
};

</script>

