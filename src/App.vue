<template>
<div id="nav">
 
    <v-app-bar
      absolute
      color="#6A76AB"
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

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title  align='center'>      
      <v-img src="./assets/LogoAnne.png"
      contain
      align='right'        
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

<style>
.v-main {
  margin-top:224px;
}
    nav li:hover,
   nav li:active{
      background-color: rgb(202, 110, 255);
      cursor: pointer;
    }
#nav {
  background: lavender;
} 

</style>