<template>
  <div>
      <h1>
        Mine projekter
    </h1>
    <p class="subheading font-weight-regular text-center" id="text">
I mit galleri, kan I se forskellige kreative projekter jeg har lavet, de sidste 3 år
    </p>
  <v-row>
         <v-col
      v-for="n in items"
      :key="n"
      class="d-flex child-flex"
      cols="3"
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
  </div>
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
                       {
                        ImgUrl: require("@/assets/VG.jpg")
                         
                    }, 


                    {
                        ImgUrl: require("@/assets/berlin.jpg")
                    }, 
                      {
                        ImgUrl: require("@/assets/Barca.jpg")
                    }, 
                      
                      {
                        ImgUrl: require("@/assets/frank.jpg")
                    }, 
                      {
                        ImgUrl: require("@/assets/esb.jpg")
                    }, 

                    {
                        ImgUrl: require("@/assets/hca.jpg")
                    }, 
                     {
                        ImgUrl: require("@/assets/Minime.jpg")
                    }, 
                    {
                        ImgUrl: require("@/assets/Grotten ny.jpg")
                    }, 
                    
                    {
                        ImgUrl: require("@/assets/moarten.png")
                    },





                ]
            }
        }

})

</script>

