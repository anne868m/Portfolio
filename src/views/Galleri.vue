<template>
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
                        ImgUrl: require("@/assets/berlin.jpg")
                    }, 

                    {
                        ImgUrl: require("@/assets/hca.jpg")
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
