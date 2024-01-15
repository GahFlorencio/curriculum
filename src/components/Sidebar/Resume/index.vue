<template>
  <ul class="py-2 w-full px-1">
    <li class="flex item-center justify-center px-1">
      <span class="w-4">
        <font-awesome-icon
          class="text-xs  text-drakula-green mt-1"
          icon="user-plus"
      /></span>
      <span class="w-full pl-2">
        <span class="text-xs font-bold text-drakula-yellow ">Level: </span>
        <span class="text-xs text-drakula-purple">{{ age }}</span>
      </span>
    </li>
    <li class="flex item-center justify-center px-1">
      <span class="w-4">
        <font-awesome-icon
          class="text-xs  text-drakula-green mt-1"
          icon="chess-rook"
      /></span>
      <span class="w-full pl-2">
        <span class="text-xs font-bold text-drakula-yellow ">Kingdom: </span>
        <span class="text-xs text-drakula-purple">{{kingdom}}</span>
      </span>
    </li>
    <li class="flex item-center justify-center px-1">
      <span class="w-4">
        <font-awesome-icon
          class="text-xs  text-drakula-green mt-1"
          icon="chess-queen"
      /></span>
      <span class="w-full pl-2">
        <span class="text-xs font-bold text-drakula-yellow ">Province: </span>
        <span class="text-xs text-drakula-purple">{{ province }}</span>
      </span>
    </li>
    <li class="flex item-center justify-center px-1">
      <span class="w-4">
        <font-awesome-icon
          class="text-xs  text-drakula-green mt-1"
          icon="dice-d20"
      /></span>
      <span class="w-full pl-2">
        <span class="text-xs font-bold text-drakula-yellow ">Class: </span>
        <span class="text-xs text-drakula-purple">{{ classDev }}</span>
      </span>
    </li>
    <li class="flex item-center justify-center px-1">
      <span class="w-4">
        <font-awesome-icon
          class="text-xs  text-drakula-green mt-1"
          icon="mobile-alt"
      /></span>
      <span class="w-full pl-2">
        <span class="text-xs font-bold text-drakula-yellow ">Whatsapp: </span>
        <span class="text-xs text-drakula-purple"
          ><a href="https://wa.me/5516997860060">{{cellphone}}</a></span
        >
      </span>
    </li>

    <li class="flex item-center justify-center px-1">
      <span class="w-4">
        <font-awesome-icon
          class="text-xs  text-drakula-green mt-1"
          icon="envelope"
      /></span>
      <span class="w-full pl-2">
        <span class="text-xs font-bold text-drakula-yellow ">Mail: </span>
        <span class="text-xs text-drakula-purple">{{ mail }}</span>
      </span>
    </li>
    <li
      @click="scrollFunction('#about')"
      class="text-drakula-purple hover:text-drakula-green  cursor-pointer flex item-center justify-center px-2 border-t-2 border-drakula-current mt-2 pt-2"
    >
      <span class="w-4">
        <font-awesome-icon
          class="text-drakula-green text-md  mt-1"
          icon="scroll"
      /></span>
      <span class="w-full pl-4">
        <span class="text-sm font-bold  mr-1">About</span>
      </span>
    </li>
    <li
      @click="scrollFunction('#missions')"
      class="text-drakula-purple hover:text-drakula-green  cursor-pointer flex item-center justify-center px-2"
    >
      <span class="w-4">
        <font-awesome-icon class="text-drakula-green text-md  mt-1" icon="map"
      /></span>
      <span class="w-full pl-4">
        <span class="text-sm font-bold  mr-1">Missions</span>
      </span>
    </li>
    <li
      @click="scrollFunction('#skills')"
      class="text-drakula-purple hover:text-drakula-green  cursor-pointer flex item-center justify-center px-2"
    >
      <span class="w-4">
        <font-awesome-icon
          class="text-drakula-green text-md  mt-1"
          icon="hat-wizard"
      /></span>
      <span class="w-full pl-4">
        <span class="text-sm font-bold  mr-1">Skills</span>
      </span>
    </li>
    <li
      @click="scrollFunction('#achievements')"
      class="text-drakula-purple hover:text-drakula-green  cursor-pointer flex item-center justify-center px-2"
    >
      <span class="w-4">
        <font-awesome-icon
          class="text-drakula-green text-md  mt-1"
          icon="trophy"
      /></span>
      <span class="w-full pl-4">
        <span class="text-sm font-bold  mr-1">Achievements</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Resume",
  props: ["province", "kingdom", "mail" , "classDev", "cellphone"],
  computed:{
    age(){
      const birthday = new Date('1995-02-12');
      const today =  new Date();
			return Math.floor((today.getTime() - birthday.getTime()) / (365 * 24 * 60 * 60 * 1000))
    }
  },
  methods: {
    scrollFunction(id) {
      let element = document.querySelector(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },    
  },
};
</script>
