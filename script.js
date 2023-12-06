//your JS code here. If required.
const sizeInfo = document.getElementById('sizeInfo');

function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeInfo.textContent = `Width: ${width}, Height: ${height}`;
}

window.addEventListener('resize', updateSize);
updateSize(); // Initial call to display initial window size
