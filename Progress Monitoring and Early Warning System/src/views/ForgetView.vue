<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useToast } from 'primevue/usetoast';

const toast = useToast();

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
            <Form>
              <div style="margin-bottom: 1rem;">
                <label for="username">ชื่อผู้ใช้</label>
                <InputText style="width: 100%;" placeholder="เช่น b63xxxxxx หรือ regxxx"/>
              </div>
              <div>
                <label for="password">รหัสผ่าน</label>
                <InputText style="width: 100%;" type="password" placeholder="กรอกรหัสผ่าน"  />
              </div>
              
              <Button type="submit" label="เข้าสู่ระบบ" style="margin-top: 1rem; width: 100%;" />
            </Form>
            
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

.cursor-pointer {
  cursor: pointer;
}

</style>
