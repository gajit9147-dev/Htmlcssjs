const table = document.getElementById("myTable");

table.addEventListener("click", (e) => {
    const row = e.target.closest("tr[data-href]");
    if (!row) return;

    // If user clicks a real <a> link inside the row, don't override it
    if (e.target.closest("a")) return;

    window.location.href = row.dataset.href; // same tab
});