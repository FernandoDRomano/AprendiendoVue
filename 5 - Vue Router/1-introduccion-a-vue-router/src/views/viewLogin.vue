<template>
    <section>
        <form v-on:submit.prevent="submit" class="formulario">
            <h2>Login</h2>
            <input v-model="username" required type="text" name="usuario" id="usuario" placeholder="Usuario">
            <input v-model="password" required type="password" name="password" id="password" placeholder="Password">
            <input class="enviar" type="submit" value="Ingresar">
        </form>
    </section>
</template>

<script>
    export default {
        name: 'viewLogin',
        data(){
            return{
                username: '',
                password: ''
            }
        },
        methods:{
            async submit(){
                try {
                    /* SIMULO LA CONSULTA A UNA API PARA COMPROBAR LAS CREDENCIALES DEL USUARIO Y REALIZAR EL LOGIN */
                    await this.$store.dispatch('Login', this.username);
                    /* UNA VEZ LOGUEADO REDIRIJO AL DASHBOARD */
                    this.$router.push({name: 'Dashboard'})
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    section{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        .formulario{
            border: 1px solid silver;
            padding: 2rem 1rem;

            h2{
                padding-bottom: 1.3rem;
                font-size: 1.7rem;
                font-weight: bold;
                text-align: center;
            }

            input{
                width: 100%;
                font-size: 1.4rem;
                text-align: center;
                margin: .5rem 0;
                padding: 0;
                
                &.enviar{
                    color: white;
                    background-color: steelblue;
                    padding: .5rem 0;
                    font-size: 1.3rem;
                    border: 0;
                    border-radius: 1rem;
                }
            }
        }
    }
</style>