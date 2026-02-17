/* =========================
   MODAL LOGIC
========================= */

function openModal(type) {

    if (type === "listen")
        document.getElementById("listenModal").style.display = "flex";

    if (type === "watch")
        document.getElementById("watchModal").style.display = "flex";

}

function closeModal() {

    document.getElementById("listenModal").style.display = "none";
    document.getElementById("watchModal").style.display = "none";

}

/* close when clicking outside */

window.onclick = function (event) {

    if (event.target.classList.contains("modal"))
        closeModal();

}
