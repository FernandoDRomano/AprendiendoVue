<template>
    <div class="info">
        <p v-for="(value, key, index) in usuarioLocalidad" :key="index">
            <strong>{{ key }}</strong>: {{ value }}
        </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: 'UsuarioInfo',
        /* DEFINO LA PROPIEDAD username QUE SERA DE TIPO STRING Y REQUERIDA */
        props: {
            username: {
                type: String,
                required: true
            }
        },
        computed:{
            ...mapState(['usuarios']),
            /* 
                BUSCO EL USUARIO EN LA COLECCIÓN DE VUEX MEDIANTE EL username QUE VIENE COMO PARAMETRO POR EL
                RouterLink 
            */
            usuario(){
                return this.usuarios.find(usuario => usuario.login.username === this.username)
            },

            usuarioLocalidad() {
                const { city, country, postcode, state } = this.usuario.location;
                return {
                    city, country, postcode, state
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
.info {
  padding: 1rem;
}
</style>