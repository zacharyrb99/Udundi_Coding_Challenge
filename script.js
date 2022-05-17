let $modal = $("#modal");
let $modalBtn = $("#details-btn");
let $closeBtn = $("#close");
let $details = $("#details");

$modalBtn.click(() => {
    $modal.show(1000);
    $details.hide(1000);
});

$closeBtn.click(() => {
    $modal.hide(1000);
    $details.show(1000);
});