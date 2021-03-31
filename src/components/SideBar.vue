<template>
  <div>
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a class="brand-link text-center">
        <span class="brand-text font-weight-light">Ubiqui</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <a class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>
                  Cliente
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a class="nav-link" @click="listPage()">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Lista</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="addPage()">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cadastro</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
export default ({
  data () {
    return {
      
    }
  },
  methods: {
    addPage() {
      this.$router.push({ path: '/cadastro' })
    },
    listPage() {
      this.$router.push({ path: '/' })
    }
  }
})
</script>

<style scoped>
  [class*=sidebar-dark-] {
    background-color: #203f98;
    color: #fff;
  }
  [class*=sidebar-dark] .brand-link {
    border-bottom: 1px solid #203f98;
  }
  [class*=sidebar-dark-] .sidebar a {
    color: #fff;
  }
</style>