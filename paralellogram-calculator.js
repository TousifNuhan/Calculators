function paralellogram() {
    const baseInput = document.querySelector('#bases').value;
    const base = parseFloat(baseInput);
    // console.log(base);

    const heightInput = document.getElementById('heights').value;
    const height = parseFloat(heightInput);
    // console.log(height);
   
    const area =base * height;
    console.log(area);

    document.querySelector('#bases').value = '';
    document.getElementById('heights').value = '';
}