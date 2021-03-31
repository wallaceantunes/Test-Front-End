<template>
  <div class="wrapper">
    <NavBar />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
.btn-primary {
  background-color: #203f98;
  border-color: #203f98;
}
  .btn-primary:hover, .btn-primary.focus, .btn-primary:focus, .btn-primary.disabled, .btn-primary:disabled {
    background-color: #152961;
    border-color: #152961;
  }
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  background-color: #152961;
  border-color: #152961;
}
.btn-success {
  background-color: #00a79d;
  border-color: #00a79d;
}
.btn-success:hover, .btn-success.focus, .btn-success:focus, .btn-success.disabled, .btn-success:disabled {
  background-color: #018078;
  border-color: #018078;
}
.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show > .btn-success.dropdown-toggle {
  background-color: #018078;
  border-color: #018078;
}
.btn-warning, .btn-warning:hover, .btn-warning.focus, .btn-warning:focus, .btn-warning.disabled, .btn-warning:disabled {
  color: #fff;;
}
.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show > .btn-warning.dropdown-toggle {
  color: #fff;
}
</style>
