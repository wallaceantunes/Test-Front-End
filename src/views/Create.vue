<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Cadastro Cliente</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <label>Tipo</label>
            <select class="form-control" v-model="pessoa">
              <option value="PF">Pessoa Física</option>
              <option value="PJ">Pessoa Jurídica</option>
            </select>
          </div>
          <div class="col-sm-12 col-md-6">
            <label>{{doc}}</label>
            <input
              class="form-control"
              type="text"
              placeholder="Documento"
              v-model="documento"
              v-mask="pessoa==='PJ'?'##.###.###/####-##':'###.###.###-##'">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <label>Nome</label>
            <input class="form-control" type="text" placeholder="Nome" v-model="nome">
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Nome Fantasia</label>
            <input class="form-control" type="text" placeholder="Nome Fantasia"  :disabled="isPf" v-model="nomeFantasia">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <label>Nascimento/Abertura</label>
            <input class="form-control" type="date" placeholder="" v-model="nascimento">
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Gênero</label>
            <select class="form-control" :disabled="!isPf" v-model="genero">
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <label>Telefone</label>
            <input class="form-control" type="text" placeholder="Nome" v-model="telefone" v-mask="'(##) #####-####'">
          </div>
          <div class="col-sm-12 col-md-6">
            <label>E-mail</label>
            <input class="form-control" type="email" placeholder="E-mail" v-model="email">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <label>CEP</label>
            <input class="form-control" type="text" placeholder="CEP" v-model="cep" @change="getEndereco()" v-mask="'#####-###'">
          </div>
          <div class="col-sm-12 col-md-4">
            <label>Endereço</label>
            <input class="form-control" type="text" placeholder="Endereço" v-model="endereco" disabled>
          </div>
          <div class="col-sm-12 col-md-4">
            <label>Número</label>
            <input class="form-control" type="text" placeholder="Número" v-model="numero">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <label>Complemento</label>
            <input class="form-control" type="text" placeholder="Complemento" v-model="complemento">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <label>Bairro</label>
            <input class="form-control" type="text" placeholder="Bairro" v-model="bairro" disabled>
          </div>
          <div class="col-sm-12 col-md-4">
            <label>Cidade</label>
            <input class="form-control" type="text" placeholder="Cidade" v-model="cidade" disabled>
          </div>
          <div class="col-sm-12 col-md-4">
            <label>UF</label>
            <input class="form-control" type="text" placeholder="UF" v-model="uf" disabled>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-sm-12 text-right">
            <button type="button" class="btn btn-success" @click="add()">Cadastrar</button>
          </div>
        </div>
        <br>
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
      labelNasc: '',
      documento: '',
      nome: '',
      nomeFantasia: '',
      nascimento: '',
      genero: '',
      telefone: '',
      email: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  },
  computed: {
    ...mapState(['enderecoCep', 'statusMessage', 'errorMessage'])
  },
  watch: {
    pessoa(value) {
      if(value === 'PF') {
        this.isPf = true
        this.doc = 'CPF'
        this.labelNasc = 'Nascimento'
      } else {
        this.isPf = false
        this.doc = 'CNPJ'
        this.labelNasc = 'Abertura da empresa'
      }
    },
    statusMessage(value){
      if(value){
        this.$router.push({ path: '/' })
      }
    },
    errorMessage(value){
      if(value){
        Swal.fire({
        title: 'Atenção!',
        text: value,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: '#d33',
        cancelButtonText: 'OK!'
      })
      }
    },
    enderecoCep(value) {
      this.endereco = value.logradouro
      this.bairro = value.bairro
      this.cidade = value.localidade
      this.uf = value.uf
    }
  },
  methods: {
    getEndereco() {
      this.$store.dispatch('getCep', this.cep)
    },
    add() {
      let data = {
        cli_type: this.pessoa,
        cli_document: this.documento,
        cli_name: this.nome,
        cli_fantasy_name: this.nomeFantasia,
        cli_born: this.nascimento,
        cli_gender: this.genero,
        cli_phone: this.telefone,
        cli_email: this.email,
        cli_postcode: this.cep,
        cli_address: this.endereco,
        cli_address_number: this.numero,
        cli_address_complement: this.complemento,
        cli_address_neighborhood: this.bairro,
        cli_city: this.cidade,
        cli_uf: this.uf
      }
      this.$store.dispatch('addClient', data)
    }
  }
})
</script>

<style>
</style>