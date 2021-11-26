<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img
            src="@/assets/logo.png"
            alt="Logomarca do Vue"
            class="img-responsive img-logo"
          />
        </section>
        <section class="navbar-section">
          <a href="" class="btn btn-link">Twitter</a>
          <a href="" class="btn btn-link">GitHub</a>
        </section>
      </header>
    </div>

    <router-view />
  </div>
</template>

<style scoped>
.img-logo {
  max-width: 50px;
  max-height: 50px;
}
</style>

 