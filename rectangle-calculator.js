function rectangleArea() {
    const widthInput = document.getElementById('width').value;
    const width = parseFloat(widthInput);
    // console.log(width);

    const lenthInput = document.getElementById('length').value;
    const length = parseFloat(lenthInput);
    // console.log(length);

    document.getElementById('width').value = '';
    document.getElementById('length').value = '';

    const area = width * length;
    console.log(area);
}