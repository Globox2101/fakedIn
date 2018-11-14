const publicaciones = document.querySelectorAll('.publicaciones--contenedor')

publicaciones.forEach((publicacion)=>{
    publicacion = new Vue({
        el: publicacion,
        data: {
            menuCerrado: true,
        },
        methods: {
            detectarMenu: function()
            {
                this.menuCerrado = !this.menuCerrado

            },

            abrirPublicacion: function()
            {
                const contenedor = this.$refs.texto
                contenedor.style.height = 'auto'

                const boton = this.$refs.botonLeerMas
                boton.style.display = 'none'
            }
        }
    })
})

const compartirPublicacion = new Vue({
    el: '.contenido--publicaciones--compartir',
    data: {
        publicacionActiva: false,
    },
    methods: {
        accionPublicacion: function()
        {
            this.publicacionActiva = !this.publicacionActiva;
        }
    }

})

