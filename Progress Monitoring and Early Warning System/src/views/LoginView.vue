<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const router = useRouter();

const initialValues = ref({
  username: "",
  password: "",
});

const validUsername = 'b6521600000'
const validPassword = 'Pass@1234'


const resolver = ({ values }) => {
  const errors = {};

  if (!values.username) {
    errors.username = "กรุณากรอกชื่อผู้ใช้";
  }
  if (!values.password) {
    errors.password = "กรุณากรอกรหัสผ่าน";
  }
  return { errors };
};

const OnFormSubmit = ({ username, password }) => {
  if (username === validUsername && password === validPassword) {
    toast.add({
      severity: "success",
      summary: "เข้าสู่ระบบสำเร็จ",
      detail: "ยินดีต้อนรับสู่ระบบสารสนเทศบริหารการศึกษา",
    });
    router.push('/profile'); 
  } else {
    toast.add({
      severity: "error",
      summary: "เข้าสู่ระบบล้มเหลว",
      detail: "กรุณาตรวจสอบข้อมูลที่กรอก",
    });
    console.log('HTTP Status Code: 404 - Not Found');
  }
};
</script>

<template>
  <main>
      <Card style="width: 25rem;margin-top: 5vh; height: 70vh; align-items: center;" >
        <template #header>
          <div style="margin-top: 2rem;">
            <img alt="KU logo" src="https://my.ku.th/myku/favicon.ico" class="logo" >
          </div>
        </template>

        <template #title>
          <div style="text-align: center;">
            <h1 style="font-weight: bold; color: rgb(0, 108, 104); font-size: 1.5em;">เข้าใช้งานระบบสารสนเทศบริหารการศึกษา</h1>
          </div>
        </template>

        <template #content>
           <div>
            <Form :initialValues="initialValues" @submit="OnFormSubmit(initialValues)" :resolver="resolver">
              <div style="margin-bottom: 1rem;">
                <label for="username">ชื่อผู้ใช้</label>
                <InputText id="username" v-model="initialValues.username" style="width: 100%;" placeholder="เช่น b63xxxxxx หรือ regxxx"/>
              </div>
              <div>
                <label for="password">รหัสผ่าน</label>
                <InputText type="password" id="password" v-model="initialValues.password" style="width: 100%;" placeholder="กรอกรหัสผ่าน" />
              </div>
              <div>
                <RouterLink to="/Forgot">ลืมรหัสผ่าน?</RouterLink>
              </div>
              <Button type="submit" label="เข้าสู่ระบบ" style="margin-top: 1rem; width: 100%;" />
            </Form>
            <hr style="margin-top: 2rem;">
            <Router-Link to="/profile">
              <Button label="Student Login" style="width: 100%;"/>
            </Router-Link>
            <Router-Link to="/TeachPro">
              <Button label="Teacher Login" style="width: 100%;"/>
            </Router-Link>
            <Router-Link to="/TeachChair">
              <Button label="อาจารย์ประธานหลักสูตร" style="width: 100%;"/>
            </Router-Link>
             <Router-Link to="/TeachChair">
              <Button label="อาจารย์ประธานหลักสูตร" style="width: 100%;"/>
            </Router-Link>
             <Router-Link to="/TeachChair">
              <Button label="อาจารย์ประธานหลักสูตร" style="width: 100%;"/>
            </Router-Link>
            <Router-Link to="/AdminPro">
              <Button label="Admin Login" style="width: 100%;"/>
            </Router-Link>
           </div>
        </template>

        
            

      </Card>
      
  </main>
</template>

<style scoped>
.logo {
  height: 100px;
}

main {
  background-image: url("https://kps.ku.ac.th/v8/images/campus_photo/Tabebuia-rosea/cp-0006.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}


</style>
