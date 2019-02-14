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
                class: "success",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="'+  diaSeleccionado + '"]').css('background', 'red');
                    modal.close();
                }
            }, {
                id: "opcionDos",
                content: "Sin seleccion",
                class: "success",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="' + diaSeleccionado + '"]').css('background', 'white');
                    modal.close();
                }
            },
            {
                id: "opcionTres",
                content: "No llego",
                class: "success",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="' + diaSeleccionado + '"]').css('background', 'black');
                    modal.close();

                }
            }, {
                id: "opcionCuatro",
                content: "100",
                class: "success",
                ico: "check",
                close: false,
                onClick: function (modal, btn) {
                    $('div[data-date="' + diaSeleccionado + '"]').css('background', 'green');
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