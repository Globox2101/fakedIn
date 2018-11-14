// const pasosEncabezado = new Vue({
//     el: '.pasos',
//     data:{
//         pasosEscondido: false,
//     },
//     methods: {
//         accionPasos: function()
//         {
//             if(this.pasosEscondido)
//             {
//                 console.log(this)
//                 this.$el.style.height = '400px'
//                 this.pasosEscondido = !this.pasosEscondido
//                 this.$refs.boton.style.transform = "rotate(180deg)"
//             }
//             else
//             {
//                 this.$el.style.height = '130px'
//                 this.pasosEscondido = !this.pasosEscondido
//                 this.$refs.boton.style.transform = "rotate(0deg)"
//             }
//         }
//     }
// })

const pasosContenedor = document.querySelectorAll('.pasos--contenedor>div')
pasosContenedor.forEach((contenedor)=>{
    contenedor = new Vue({
        el: contenedor,
        data: {
            pasosContenedorActivo: false,
            
        },
        methods: {
            pasosActivarContenedor: function()
            {
                this.pasosContenedorActivo = true;
            },
            pasosDesactivarContenedor: function()
            {
                this.pasosContenedorActivo = false;
            }
        }
    })
})
console.log(pasosContenedor)