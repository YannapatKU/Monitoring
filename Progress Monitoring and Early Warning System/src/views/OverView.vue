<template>
  <div class="main-layout-toggable">
    <aside :class="['sidebar-toggable', { 'sidebar-hidden': !visible }]">
      <div class="sidebar-header">
        <Avatar shape="circle" />
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

        <h2 style="font-weight: bold; margin-bottom: 2rem; padding: 1rem; ">Dashboard</h2>
        <div class="chart-cards-container"> 
          <Card style="width: 85%; height: 55vh; margin: 0 auto;"> 
            <template #header>
              <h3 style="font-weight: bold; text-align: center; margin-top: 1rem;">สรุปผลการศึกษา</h3>
            </template>

            <template #content>
              <Chart type="doughnut" :data="chartData" :options="chartOptions" style="width: 80%; height: 300px; margin: 0 auto;" />
            </template>
          </Card>

          <Card style="width: 85%; height: 55vh; margin: 0 auto;"> 
            <template #header>
              <h3 style="font-weight: bold; text-align: center; margin-top: 1rem;">สรุปผลการศึกษา</h3>
            </template>

            <template #content>
              <Chart type="line" :data="chartLineData" :options="chartLineOptions" style="width: 100%; height: 300px;" />
            </template>
          </Card>

      </div>    
       <div class="summary-cards-container">
      <Card style="width: 100%; height: 15vh; margin: 0 auto; margin-left: 2rem;"> 
            <template #content>
              <h3 style="margin-bottom: 1rem;">หน่วยกิตสะสม</h3>
              <h3>เกรดเฉลี่ยสะสม</h3>
            </template>
          </Card>

          <Card style="width: 100%; height: 15vh; margin: 0 auto; margin-left: 2rem;"> 
            <template #content>
              <h3 style="margin-bottom: 1rem;">หลักสูตรที่สำเร็จ</h3>
              <h3>หลักสูตรที่ไม่สำเร็จ</h3>
            </template>
          </Card>
          </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";


const visible = ref(true);

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
    chartLineData.value = setChartLineData();
    chartLineOptions.value = setChartLineOptions();
});

const chartData = ref();
const chartOptions = ref(null);
const chartLineData = ref();
const chartLineOptions = ref(null);

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['ผ่าน', 'ไม่ผ่าน'],
        datasets: [
            {
                data: [10, 10],
                backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400')]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};

const setChartLineData = () => {
 const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                tension: 0.4,
                backgroundColor: 'rgba(107, 114, 128, 0.2)'
            }
        ]
    };
};
const setChartLineOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}

</script>

<style scoped>
.chart-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Creates two columns of equal width */
  justify-content: center; /* Centers the grid horizontally */
}

.summary-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Creates three columns of equal width */
  gap: 2rem; 
  justify-content: center; /* Centers the grid horizontally */
  padding: 1rem; /* Add some padding around the container */
}
</style>