<template>
<v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img class="img"
           src="../assets/Anne.jpg"
        ></v-img>
  
      </v-col>
     

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Velkommen til min portfolio
        </h1>

        <p class="subheading font-weight-regular">
          Her kan i lære mig at kende, og se de forskellelige projekter jeg har lavet, gennem de seneste år.
          Dette er både gennem skole og fritid.
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

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
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

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
  </v-container>
</template>

<script>
export default {
  name: 'Kontakt',
  components: {
   
  }
}
</script>

<style>
.img {
  width: 300px;
  height: 300px;
 justify-content: flex-end;
  
}
</style>