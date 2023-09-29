document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const pickupLocation = document.getElementById("pickup_location").value;
        const dropoffLocation = document.getElementById("dropoff_location").value;
        const pickupDate = document.getElementById("pickup_date").value;
        const returnDate = document.getElementById("return_date").value;
        const carModel = document.getElementById("car_model").value;

        if (!name || !email || !phone || !pickupLocation || !dropoffLocation || !pickupDate || !returnDate || !carModel) {
            alert("Please fill out all required fields.");
            event.preventDefault();
        }
    });
});
