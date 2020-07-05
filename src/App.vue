<template>
  <div class="flex flex-col md:flex-row">
     <Sidebar/>
     <Body/>
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar';
import Body from '@/components/Body';


export default {
  name: "App",
  components: {
    Sidebar,
    Body
  },
};
</script>

<style></style>
