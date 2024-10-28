function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-te]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}
