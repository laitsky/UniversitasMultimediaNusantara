$(document).ready(documentReady());

function documentReady() {
    $("#accordion").accordion({
        collapsible: true
    });

    let dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Add new order": function () {
                //implement here
            },
            Cancel: function () {
                dialog.dialog("close");
            }
        }
    });

    $(".btnAddOrder").on("click", function (btn) {
        //and here
        dialog.dialog("open");
    });
}