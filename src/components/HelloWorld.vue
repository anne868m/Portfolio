
<template>
    

  <v-container>
    
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="../assets/Anne.jpg"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-3">
          Velkommen til min portfolio
        </h1>

        <p class="subheading font-weight-regular text-center" id="text">
          Her kan i lære mig at kende, og se de forskellelige projekter jeg har lavet, gennem de seneste år.
          Dette er både gennem skole og fritid.
          <v-spacer></v-spacer>
         Lær mig bedere at kende, ved at trykke på endten Om, Galleri eller Kontakt, du kan altid vende tilbage hertil via Home knappen.
         <v-spacer></v-spacer>
         I kan også få en lille forsmag her.
        </p>
      </v-col>
      

      <v-col
        class="mb-5"
        cols="12"
      >
       

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
       

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>

     <v-row>
     <v-col
      v-for="n in items"
      :key="n"
      class="d-flex child-flex"
      cols="4"
     
    >

      <v-img
        contain
        max-height="250"
        max-width="250"
        :src="n.ImgUrl"
        aspect-ratio="1"
        class="Gallery"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
     </v-row>
  </v-container>
</template>

<script>

export default ({
    
    
        data() {
            return {
                items: [
                    {
                        ImgUrl: require("@/assets/Album.jpg")
                         
                    }, 
                     {
                        ImgUrl: require("@/assets/Lineart.jpg")
                         
                    }, 
                     {
                        ImgUrl: require("@/assets/ariel.jpg")
                         
                    }, 

                ]
            }
        }

})

</script>

<style >

#text {
font-style: italic;
}
</style>