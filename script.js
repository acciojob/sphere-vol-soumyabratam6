function volume_sphere(event) {
    //Write your code here
   event.preventDefault(); // Prevent form submission
  
  var radiusInput = document.getElementById('radius');
  var volumeInput = document.getElementById('volume');

  var radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius < 0) {
    volumeInput.value = 'NaN';
    return;
  }

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4); 

  volumeInput.value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
