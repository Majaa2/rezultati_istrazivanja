<template>
  <v-app class="app">
 <v-navigation-drawer
       permanent fixed
        
        dark
        color="primary"
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-content>
              <v-list-item-title>REZULTATI ISTRAŽIVANJA</v-list-item-title>
              <v-list-item-subtitle>Student Activity Tracker</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link @click="changeView('text')" :style="selected==='text'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Označavnje teksta </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('cip')" :style="selected==='cip'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Manipulacije nad tekstom </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('mouse')" :style="selected==='mouse'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Klik miša </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('scroll')" :style="selected==='scroll'?'background-color: #33adff':''"> 
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Skrolanje miša </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('act')" :style="selected==='act'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Aktivnost </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('inact')" :style="selected==='inact'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Neaktivnost </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('move')" :style="selected==='move'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Pomjeranje miša </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('key')" :style="selected==='key'?'background-color: #33adff':''"> 
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Klik tipkovnice</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('size')" :style="selected==='size'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Veličina preglednika</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="changeView('tabs')" :style="selected==='tabs'?'background-color: #33adff':''">
            <v-list-item-icon>   
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Višestruki tabovi </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           
        </v-list>
      </v-navigation-drawer>
      <v-main>
      <v-container
      style="padding-left: 256px"
      >
       
            <activity v-if="selected==='act'"></activity>
            <browser-size v-if="selected==='size'"></browser-size>
            <copy-paste v-if="selected==='cip'"></copy-paste>
            <inactivity  v-if="selected==='inact'"></inactivity>
            <keyboard-click  v-if="selected==='key'"></keyboard-click>
            <mouse-click v-if="selected==='mouse'"></mouse-click>
            <mouse-move v-if="selected==='move'"></mouse-move>
            <mouse-scroll v-if="selected==='scroll'"></mouse-scroll>
            <multiple-tabs v-if="selected==='tabs'"></multiple-tabs>
            <ozn-txt v-if="selected==='text'"></ozn-txt>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import podatci from './data/rezultati.json'

export default {
  name: 'App',
computed:{
  studentData(){
      return podatci.studenti
    },
},
  data: () => ({
    selected: "text"
  }),
  methods:{
   changeView(value){
     this.selected = value
   }
  }
};
</script>

