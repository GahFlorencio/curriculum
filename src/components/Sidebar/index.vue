<template>
  <div class="p-2 bg-drakula-background shadow-2xl w-full md:w-64 md:h-screen flex flex-col items-center justify-start">
      <h1 class="text-drakula-yellow font-bold text-2xl"> {{ name }}</h1>      
      <Avatar :picture="picture"/>
      <Resume 
        :province="province"
        :kingdom="kingdom"
        :mail="mail || 'gjfc@live.com'"
        :classDev="classDev"
        :cellphone="cellphone"/>
  </div>
</template>

<script>
import Avatar from '../Avatar';
import Resume from './Resume';

export default {
  name: "Sidebar",
  data () {
    return {
      classDev: null,
      cellphone: "+5516997860060",
      province: null,
      kingdom: null,
      mail:null,
      picture :null,
      name:null
    }
  },
  components:{
      Avatar,
      Resume,
  },

  methods:{
    async getInformations() {
      let informations = null;
      
      await fetch("https://api.github.com/users/gahflorencio", {
        "Accept": "application/vnd.github+json",
        'X-GitHub-Api-Version': '2022-11-28'
      })
        .then((response) => response.json())
        .then((data) => (informations = data));

      const location =  informations.location.split(',')
     
      this.kingdom = location[0]
      this.province = location[1]
      this.mail = informations.email
      this.picture = informations.avatar_url
      this.name =  informations.name
      this.classDev  = informations.bio


    },
  },
  created(){
    this.getInformations()
  }
};
</script>

