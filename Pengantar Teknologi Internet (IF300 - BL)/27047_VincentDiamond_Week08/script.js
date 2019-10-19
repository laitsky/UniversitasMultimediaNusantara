$(document).ready(documentReady);

function documentReady() {
    $("#accordion").accordion({
        collapsible: true
    });

    $('#price').prop('disabled', true);
    let roomName;

    let dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Add new order": function () {
                //implement here
                $('#tableOrder').append(
                    '<tr><td>' + $('#name').val() + '</td>' +
                    '<td>' + roomName + '</td>' +
                    '<td>$' + $('#deposit').val() + '</td></tr>'
                );
            },
            Cancel: function () {
                dialog.dialog("close");
            }
        },
        close: function () {
            $('form')[0].reset();
        }
    });

    $(".btnAddOrder").on("click", function (btn) {
        //and here
        let roomTypeID = $(this).attr('room-type');

        if (roomTypeID == "single-room") {
            $('#price').val(200);
            roomName = "Griffin";
        } else if (roomTypeID == "double-room") {
            $('#price').val(350);
            roomName = "Swanson";
        } else if (roomTypeID == "duplex-room") {
            $('#price').val(600);
            roomName = "Brown";
        } else if (roomTypeID == "cabana-room") {
            $('#price').val(1000);
            roomName = "Nexus";
        } else {
            $('#price').val(0);
            roomName = "-";
        }
        dialog.dialog("open");
    });
}