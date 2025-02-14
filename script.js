const RSVP_URL = "https://script.google.com/macros/s/AKfycbz3iRHj0PKsWKXJV0ZVV3zSxP3tsgjkv2H0ixHGGRWWQ8lcr5J80WHO63ITPrAIusjbvQ/exec";

document.getElementById("rsvpForm").addEventListener("submit", function(event){
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const kehadiran = document.getElementById("kehadiran").value;

    fetch(RSVP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `nama=${encodeURIComponent(nama)}&kehadiran=${encodeURIComponent(kehadiran)}`
    })
    .then(response => response.text())
    .then(data => {
        alert("Terima kasih atas jawapan anda!");
        document.getElementById("rsvpForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
