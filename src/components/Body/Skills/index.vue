<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-start mt-2">
      <font-awesome-icon
        class="text-md text-drakula-yellow"
        :icon="skill.icon"
      />
      <span class="text-md ml-2 text-drakula-yellow">{{skill.name}}</span>
    </div>

    <div class="shadow w-full bg-drakula-foreground">
      <div
        :class="
        skill.lvl <=2 ? 'bg-drakula-red text-xs font-bold leading-none py-1 text-center text-drakula-background'
        :skill.lvl <=4 ? 'bg-drakula-orange text-xs font-bold leading-none py-1 text-center text-drakula-background'
        :skill.lvl <=6 ?'bg-drakula-yellow text-xs font-bold leading-none py-1 text-center text-drakula-background'
        :skill.lvl <=8 ?'bg-drakula-green text-xs font-bold leading-none py-1 text-center text-drakula-background'
        :  'bg-drakula-purple text-xs font-bold leading-none py-1 text-center text-drakula-foreground'"
        :style="'width:'+skill.lvl*10+'%'"
      >
        Level {{skill.lvl}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: ["skill"],
};
</script>

<style></style>
