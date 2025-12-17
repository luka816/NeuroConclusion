function generate() {
    let text = [];

    document.querySelectorAll("input[type=checkbox]:checked")
        .forEach(cb => {
            const section = cb.dataset.section;
            const key = cb.dataset.key;
            text.push(templates[section][key]);
        });

    document.getElementById("output").value = text.join(" ");
}
