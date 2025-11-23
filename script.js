document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll("details").forEach(faq => {
    faq.addEventListener("toggle", () => {
        if (faq.open) {
            faq.style.transition = "all 0.3s ease";
            faq.style.backgroundColor = "#f0f0f0";
        } else {
            faq.style.backgroundColor = "#999999";
        }
    });
});

const topBtn = document.createElement("button");
topBtn.textContent = "↑ Top";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.background = "#111111";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
