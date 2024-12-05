document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='https://shopee.co.id']");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#FFD700"; // Mengubah warna saat hover
        });

        link.addEventListener("mouseout", () => {
            link.style.color = ""; // Kembalikan warna semula
        });
    });
});
