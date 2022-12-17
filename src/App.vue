<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Overview from './pages/Overview.vue'
</script>

<template>
  <header>
    <Header />
  </header>
  <main class="page-event-list">
    <Overview />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

