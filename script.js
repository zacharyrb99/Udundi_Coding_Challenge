let $modal = $("#modal");
let $modalBtn = $("#details-btn");
let $closeBtn = $("#close");
let $details = $("#details");

$modalBtn.click(() => {
    $modal.show();
    $details.hide();
});

$closeBtn.click(() => {
    $modal.hide();
    $details.show();
});