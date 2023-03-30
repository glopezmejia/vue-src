<script setup>
import First from './components/First.vue';
import Second from './components/Second.vue';
import Third from './components/Third.vue';
import Fourth from './components/Fourth.vue';
import Fifth from './components/Fifth.vue';
import Sixth from './components/Sixth.vue';
</script>

<template>
  <div class="container">
    <First class="component component-1"></First>
    <Second class="component component-2"></Second>
    <Third class="component component-3"></Third>
    <Fourth class="component component-4"></Fourth>
    <Fifth class="component component-5"></Fifth>
    <Sixth class="component component-6"></Sixth>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.container{
  padding: 30px 0 0 30px;
  height: calc(100vh - 60px);
  width: calc(100vw - 60px);
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-template-areas: 
    "header header header"
    "tleft tright tright"
    "lleft lleft lright"
    "footer footer footer"
}
.component {
  border-radius: 1rem;
}
.component-1 {
  grid-area: header;
  background-color: #845EC2;
}
.component-2 {
  grid-area: tleft;
  background-color: #D65DB1;
}
.component-3 {
  grid-area: tright;
  background-color: #FF6F91;
}
.component-4 {
  grid-area: lleft;
  background-color: #FF9671;
}
.component-5 {
  grid-area: lright;
  background-color: #FFC75F;
}
.component-6 {
  grid-area: footer;
  background-color: #F9F871;
}
</style>