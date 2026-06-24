
/* ==========================================================
   1. GLOBAL VARIABLES
   ========================================================== */


let selectedPerfume = "";



/* ==========================================================
   2. OPEN ORDER MODAL
   ========================================================== */


function openOrderModal(productName) {
    selectedPerfume = productName;

    document.getElementById("orderModal").style.display = "flex";
}





/* ==========================================================
   3. CLOSE MODAL
   ========================================================== */


document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("orderModal").style.display = "none";
});






/* ==========================================================
   4. ORDER FORM
   ========================================================== */


document.getElementById("orderForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("customerName").value;

    const phoneNumber = document.getElementById("customerPhone").value;

    const whatsappNumber = "+216 53031727";

    const message =
`Hello, I would like to order ${selectedPerfume}.

Name: ${name}
Phone: ${phoneNumber}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    document.getElementById("orderModal").style.display = "none";

    this.reset();
});


/* ==========================================================
   5. MOBILE MENU
   ========================================================== */


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {
    item.addEventListener("click",() => {
            navLinks.classList.toggle("active");

    })
})









