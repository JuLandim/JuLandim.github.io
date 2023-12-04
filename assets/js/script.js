//JS para responsividade do título do header
window.addEventListener
(
    'resize', () => {
    const windowWidth = window.innerWidth;
    const fontSize = Math.max(windowWidth / 15, 16); // Define um tamanho mínimo de fonte

    const heading = document.querySelector('h1');
    heading.style.fontSize = `${fontSize}px`; // Define o tamanho da fonte do h1

    // Armazena o tamanho da fonte no armazenamento local
    localStorage.setItem('fontSize', `${fontSize}px`);
    });

    window.addEventListener('load', () => {
    // Recupera o tamanho da fonte do armazenamento local
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedFontSize)
    {
        const heading = document.querySelector('h1');
        heading.style.fontSize = savedFontSize; // Aplica o tamanho da fonte ao h1
    }
});
// Executa a função de redimensionamento inicialmente
window.dispatchEvent(new Event('resize'));

