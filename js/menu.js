const menuOpcion = new Vue({
    el: '.menu--navegacion',
    data: {
        menuAbierto: false,
        barraLateralAbierta: false,
    },
    methods: {
        abrirMenu: function()
        {
            this.menuAbierto = !this.menuAbierto
        },

        accionBarraLateral: function()
        {
            this.barraLateralAbierta = !this.barraLateralAbierta;
        }
    }
})