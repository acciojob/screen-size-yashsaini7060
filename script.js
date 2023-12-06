//your JS code here. If required.
const sizeInfo = document.getElementById('sizeInfo');
const heading = document.getElementById("heading")
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    heading.textContent = `Width: ${width}, Height: ${height}`;
}

window.addEventListener('resize', updateSize);
updateSize(); // Initial call to display initial window size
