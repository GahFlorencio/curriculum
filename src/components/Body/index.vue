<template>
  <div
    class="flex flex-col items-start  justify-start bg-drakula-current w-full md:max-h-screen md:overflow-hidden md:overflow-y-scroll px-4 py-8"
  >
    <!-- About -->
    <About />
    <!-- Mission -->
    <div
      v-if="missions"
      class="w-full bg-drakula-current rounded-md px-2 md:px-12 py-2"
    >
      <h1 id="missions" class="text-2xl font-bold text-drakula-purple mb-2">
        Missions
      </h1>
      <Missions
        v-for="mission in missions"
        :key="mission.id"
        :mission="mission"
      />
    </div>
    <div class="w-full bg-drakula-current rounded-md px-2 md:px-12 py-2">
      <h1 id="skills" class="text-2xl font-bold text-drakula-purple">Skills</h1>
      <h3 class="text-sm font-bold text-drakula-orange mb-2">
        Obs. Max Level 10
      </h3>

      <span v-if="skills" class="flex flex-col items-center">
        <Skills v-for="skill in skills" :key="skill.id" :skill="skill" />
      </span>
    </div>
    <div class="w-full bg-drakula-current rounded-md px-2 md:px-12 py-2">
      <h1 id="achievements" class="text-2xl font-bold text-drakula-purple">
        Achievements
      </h1>
      <!-- Projects-->
      <Projects :repos="repos" />
    </div>
  </div>
</template>

<script>
import Missions from "./Missions";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default {
  name: "Body",
  components: {
    Missions,
    About,
    Projects,
    Skills,
  },
  data: () => {
    return {
      repos: null,
      missions: null,
      skills: null,
    };
  },
  methods: {
    async getUserRepos() {
      await fetch("https://api.github.com/users/gahflorencio/repos")
        .then((response) => response.json())
        .then((data) => (this.repos = data));
    },
    async getMissions() {
      await fetch(
        "http://my-json-server.typicode.com/GahFlorencio/fake_api_json_test/missions"
      )
        .then((response) => response.json())
        .then((data) => (this.missions = data));
    },
    async getSkills() {
      await fetch(
        "http://my-json-server.typicode.com/GahFlorencio/fake_api_json_test/skills"
      )
        .then((response) => response.json())
        .then(
          (data) =>
            (this.skills = data.sort((a, b) => {
              return b.lvl - a.lvl;
            }))
        );
    },
   
  },
  async created() {
    await this.getUserRepos();
    await this.getMissions();
    await this.getSkills();
  },
};
</script>
