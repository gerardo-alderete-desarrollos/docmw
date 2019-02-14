$(document).ready(function () {
    let diaSeleccionado = '';
    $("#calendar-container").calendar({
        tipsy_gravity: 's', // How do you want to anchor the tipsy notification? (n / s / e / w)
        click_callback: function (date) {
            diaSeleccionado = $(this).attr('data-date');
            // console.log($(this).attr('data-date'));

            modal(diaSeleccionado);



        }, // Callback to return the clicked date object
        year: new Date().getFullYear(), // Optional start year, defaults to current year - pass in a year - Integer or String
        scroll_to_date: true // Scroll to the current day?
    });
    // $('div[data-date="1/3/2019"]').css('background', 'red');

});



const modal = (diaSeleccionado) => {
    var contentUL = '<div><button>boton1</button>';
    contentUL += '<button>boton1</button>';
    contentUL += '<button>boton1</button>';
    contentUL += '<button>boton1</button>';
    contentUL += '<button>boton1</button>';
    contentUL += '<button>boton1</button> </div>';

    lis.modal("maModal", {
        title: "Selecciona una opción",
        // content: contentUL,
        btn: [{

                id: "opcionUno",
                content: "No alcanzo",
                class: "bg-red",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="'+  diaSeleccionado + '"]').addClass('bg-red');
                    modal.close();
                }
            }, {
                id: "opcionDos",
                content: "Sin seleccion",
                class: "bg-white",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="' + diaSeleccionado + '"]').addClass('bg-white');
                    modal.close();
                }
            },
            {
                id: "opcionTres",
                content: "No llego",
                class: "bg-black",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="' + diaSeleccionado + '"]').addClass('bg-black');
                    modal.close();

                }
            }, {
                id: "opcionCuatro",
                content: "100",
                class: "bg-green",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="' + diaSeleccionado + '"]').addClass('bg-green');
                    modal.close();

                }
            }
        ],
        type: "info",
        icon: "bars",
        closed: true,
        size: "lg",
        animateIn: "bounceInDown",
    })
}