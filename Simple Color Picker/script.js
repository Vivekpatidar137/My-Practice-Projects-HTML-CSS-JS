const currentColor = document.getElementById('currentColor');

const colorBoxes = colorPalette.querySelectorAll('.color');

colorBoxes.forEach((colorBox) => {

    const SelectedColor = colorBox.style.backgroundColor;

    colorBox.addEventListener('click', () => {
        currentColor.textContent = SelectedColor;
    });
});
