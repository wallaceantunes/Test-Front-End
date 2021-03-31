<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Lista Clientes</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header text-right">
                <button type="button" class="btn btn-primary" @click="addPage()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Documento</th>
                      <th>Cliente desde</th>
                      <th>Editar</th>
                      <th>Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(client, index) in clients" :key="index">
                      <td>{{client.cli_name}}</td>
                      <td v-if="client.cli_document.length <= 11">{{client.cli_document | VMask('###.###.###-##')}}</td>
                      <td v-else>{{client.cli_document | VMask('##.###.###/####-##')}}</td>
                      <td>{{moment(client.cli_created_at).format('DD/MM/YYYY') }}</td>
                      <td>
                        <button type="button" class="btn btn-warning">
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger" @click="removeClient(client.cli_uuid)">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
export default ({
  data () {
    return {
      isPf: true,
      pessoa: 'PF',
      doc: '',
      labelNasc: ''
    }
  },
  computed: {
    ...mapState(['clients'])
  },
  mounted () {
    this.$store.dispatch('getAll')
  },
  methods: {
    removeClient(id) {
      Swal.fire({
        title: 'Cuidado!',
        text: 'Essa ação não pode ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00a79d',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('removeClient', id)
          this.$router.push({ path: '/' })
        }
      })
    },
    addPage() {
      this.$router.push({ path: '/cadastro' })
    }
  }
})
</script>

<style scoped>
.content-wrapper {
  min-height:100vh;
}
</style>