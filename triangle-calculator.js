function traiangleArea() {
    const baseInput = document.querySelector('#base').value;
    const base = parseFloat(baseInput);
    // console.log(base);

    const heightInput = document.getElementById('height').value;
    const height = parseFloat(heightInput);
    // console.log(height);
   
    const area = 0.5 * base * height;
    console.log(area);

    document.querySelector('#base').value = '';
    document.getElementById('height').value = '';
}

