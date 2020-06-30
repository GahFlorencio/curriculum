<template>
  <div class="p-2 bg-drakula-background shadow-2xl w-64 h-screen flex flex-col items-center justify-start">
      <h1 class="text-drakula-yellow font-bold text-2xl"> Gabriel Carmo</h1>      
      <Avatar/>
      <Resume/>
  </div>
</template>

<script>
import Avatar from '../Avatar';
import Resume from './Resume';

export default {
  name: "Sidebar",
  components:{
      Avatar,
      Resume,
  },
};
</script>

