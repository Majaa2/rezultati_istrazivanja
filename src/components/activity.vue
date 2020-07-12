<template>
    <v-container class="activity">
      <v-row no-gutters>
        <v-col cols="6"><v-card flat> <v-card-title>
  
      <span class="title font-weight-light">Bez prepisivanja</span>
    </v-card-title><apexchart width="100%" type="bar" :options="optionsNon" :series="seriesNon"></apexchart></v-card> </v-col>
        <v-col cols="6"><v-card flat> <v-card-title>
      <span class="title font-weight-light">Prepisivanje putem Chrome-a</span>
    </v-card-title><apexchart width="100%" type="bar" :options="optionsChromeCheaters" :series="seriesChrome"></apexchart></v-card> </v-col>
        <v-col cols="6"><v-card flat> <v-card-title>
      <span class="title font-weight-light">Prepisivanje putem mobitela</span>
    </v-card-title><apexchart width="100%"  type="bar" :options="optionsMobileCheaters" :series="seriesMobile"></apexchart></v-card> </v-col>
        <v-col cols="6"><v-card flat> <v-card-title>
      <span class="title font-weight-light">Prepisivanje putem drugih preglednika</span>
    </v-card-title><apexchart width="100%"  type="bar" :options="optionsOtherCheaters" :series="seriesother"></apexchart></v-card> </v-col>
      </v-row>
    </v-container>
</template>

<script>
import podatci from '../data/rezultati.json'

export default {
    computed:{
   cheatersChromeInitial(){
      let testRes = []
       this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Chrome'){
          testRes.push(std.inicijalni.activity)
        }
      })
      return testRes
    },
    cheatersChromeFinal(){
      let testRes = []
       this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Chrome'){
         testRes.push(std.zavrsni.activity)
        }
      })
      return testRes
    },
    cheatersOtherInitial(){
      let testRes = []
       this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Firefox/Opera'){
          testRes.push(std.inicijalni.activity)
        }
      })
      return testRes
    },
    cheatersOtherFinal(){
      let testRes = []
       this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Firefox/Opera'){
         testRes.push(std.zavrsni.activity)
        }
      })
      return testRes
    },
    cheatersMobileInitial(){
      let testRes = []
       this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Mobitel'){
          testRes.push(std.inicijalni.activity)
        }
      }) 
      return testRes
    },
    cheatersMobileFinal(){
      let testRes = []
       this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Mobitel'){
         testRes.push(std.zavrsni.activity)
        }
      })
      return testRes
    },
    studentData(){
      return podatci.studenti
    },
     seriesChrome(){
      return [{
        name: 'Inicijalni',
        data: this.cheatersChromeInitial
      },{
        name: 'Završni',
        data: this.cheatersChromeFinal
      }]
    },
        seriesother(){
      return [{
        name: 'Inicijalni',
        data: this.cheatersOtherInitial
      },{
        name: 'Završni',
        data: this.cheatersOtherFinal
      }]
    },
        seriesMobile(){
      return [{
        name: 'Inicijalni',
        data: this.cheatersMobileInitial
      },{
        name: 'Završni',
        data: this.cheatersMobileFinal
      }]
    }, optionsChromeCheaters() {
      let studnets = []
      this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Chrome'){
          studnets.push(std.id)
        }
      })
      return {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: studnets
        }
      }
      },
    optionsOtherCheaters() {
      let studnets = []
      this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Firefox/Opera'){
          studnets.push(std.id)
        }
      })
      return {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: studnets
        }
      }
      },
    optionsMobileCheaters() {
      let studnets = []
      this.studentData.filter(std =>{
        if(std.cheated && std.type === 'Mobitel'){
          studnets.push(std.id)
        }
      })
      return {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: studnets
        }
      }
      },
       optionsNon() {
      let studnets = []
      this.studentData.filter(std =>{
        if(!std.cheated){
          studnets.push(std.id)
        }
      })
      return {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: studnets
        }
      }
      },
      seriesNon(){
      return [{
        name: 'Inicijalni',
        data: this.nonCheatersInitial
      },{
        name: 'Završni',
        data: this.nonCheatersFinal
      }]
    },
    nonCheatersInitial(){
      let testRes = []
       this.studentData.filter(std =>{
        if(!std.cheated){
          testRes.push(std.inicijalni.activity)
        }
      })
      return testRes
    },
    nonCheatersFinal(){
      let testRes = []
       this.studentData.filter(std =>{
        if(!std.cheated){
         testRes.push(std.zavrsni.activity)
        }
      })
      return testRes
    },
    
},
  data: () => ({
  }),
}
</script>