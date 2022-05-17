let $modal = $("#modal");
let $modalBtn = $("#details-btn");
let $closeBtn = $("#close");
let $details = $("#details");

// Open modal when clicking on details button
$modalBtn.click(() => {
    $modal.show(1000);
    $details.hide(1000);
});

// Close modal when clicking on close button
$closeBtn.click(() => {
    $modal.hide(1000);
    $details.show(1000);
});

// Close modal when clicking outside of modal
$(document).click(e => {
    // Checks whether you clicked on modal/details button
    if (e.target.closest("#modal") || e.target.closest("#details-btn")) return;
    
    $modal.hide(1000);
    $details.show(1000);  
});