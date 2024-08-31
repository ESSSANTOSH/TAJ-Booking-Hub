document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let roomType = document.getElementById("roomType").value;
    let checkIn = document.getElementById("checkIn").value;
    let checkOut = document.getElementById("checkOut").value;

    let message = `Thank you, ${name}! Your booking for a ${roomType} from ${checkIn} to ${checkOut} has been confirmed.`;
    document.getElementById("bookingMessage").textContent = message;
});
function toggleImage(imageId) {
    let image = document.getElementById(imageId);
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}
