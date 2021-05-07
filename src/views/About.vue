<template>
  <div class="Om">
    <h1 class="h1">Om mig</h1>
  
    <p class="subheading font-weight-regular text-center" id="text">
    Jeg hedder Anne, og er bosat i Sønderis i det vestlige Esbjerg.
    <v-spacer>
      </v-spacer>
    I min hverdag studere jeg til multimediedesiger, som også er fokuset på denne portfolio.
    </p>
 <v-spacer>
</v-spacer>
 <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="../assets/Anne CV.jpg"
          class="my-3"
          contain
         height="300"
        
        ></v-img>
        
      </v-col>
 </v-row>
<v-spacer>
</v-spacer>
<h3>
I kan se Cv'et i Pdf, ved at trykke på pdt knappen, og eller se min CV video på Youtube knappen.
</h3>

<v-btn
style="margin:5px;"
 class="mx-2"
      fab
      dark
      color="#a7d5bd"  
      href="https://drive.google.com/file/d/1sHkysTdG5MTxEUo6782sWIY_K6dVnYpM/view?usp=sharing"
> <v-icon dark>
        mdi-file-document-outline
      </v-icon></v-btn>   
             
 <v-btn
 style="margin:5px;"
 class="mx-2"
      fab
      dark
      color="#a7d5bd"  
      href="https://youtu.be/LpouYlBIInI"
>  <v-icon dark>
        mdi-youtube
      </v-icon> </v-btn> 
   

  </div>
  
</template>

<script>
  export default {
    name: 'About',

    data: () => ({
    
    }),
  }
 
  
</script>



<style>

#text{

font-family: 'Times New Roman', Times, serif;
font-size: 1rem;
text-align: center;



}

.mx-auto{
  
  max-height: 400px;
  max-width: 300px;

}

.h1{
  text-align: center
}


   nav li:hover,
   nav li:active{
   
     background-color: rgb(79, 104, 248);
      cursor: pointer;
      font-style: italic;
      
    }
.colo
{
  flex-basis: 0;
  flex-grow: 1;
  max-width: 50%;
}

</style>