<template>


<div id="nav" :height="height">
 
    <v-app-bar
      absolute
       color="#d1eaf1"
      dark
      shrink-on-scroll
      prominent
      src="./assets/Pink.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
        <template v-slot:img="{ props }">
        <v-img 
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
     


      <v-toolbar-title >      
      <v-img src="./assets/LogoAnne.png"
      contain        
      max-height="100"
        max-width="100">
      </v-img>
      Anne Andersen Portfolio
    
      </v-toolbar-title>

     

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>
            <router-link router-link tag="li" class="col" class-active="active" :to="{ name: 'Home' }">Home</router-link> 
          </v-tab>
          <v-tab>
            <router-link router-link tag="li" class="col" class-active="active" :to="{ name: 'Om'}">Om</router-link>
          </v-tab>
          <v-tab> 
            <router-link router-link tag="li" class="col" class-active="active" :to="{ name: 'Galleri' }">Galleri</router-link>
          </v-tab>
          <v-tab>
            <router-link router-link tag="li" class="col" class-active="active" :to="{ name: 'Kontakt' }">Kontakt</router-link> 
          </v-tab>
        </v-tabs>
      </template>
     
    </v-app-bar>


 

     <v-main>

<router-view/>
</v-main>
 






</div>  




</template>


<script>

  export default {
    data: () => ({
      items: [
        { title: 'Kontakt' },
        { title: 'Om' },
        { title: 'Galleri' },
      ],
    }),
  }
 
    
</script>

<script>
  export default {
    computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
        }
      },
    },
  }
</script>
<script>
 export default {
    data: () => ({
      selection: [],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
    
  
</script>


<style>

.v-main {
  margin-top:224px;
}
    nav li:hover,
   nav li:active{
      
      cursor: pointer;
    }
#nav {
  background: lavender;
  text-align: center
} 


</style>