function binerToDesimal() {
  var biner = document.getElementById("inputBiner").value;
  var pengali = parseInt(document.getElementById("inputPengali").value);

  // Validasi input
  if (!isValidInput(biner, pengali)) {
    displayError();
    return;
  }

  var total = calculateTotal(biner, pengali);
  displayResults(biner, pengali, total);
}

function isValidInput(biner, pengali) {
  return /^[01]+$/.test(biner) && Number.isInteger(pengali) && pengali > 1;
}

function calculateTotal(biner, pengali) {
  var total = 0;

  for (var i = 0; i < biner.length; i++) {
    var bit = parseInt(biner[i]);
    var pangkat = biner.length - 1 - i;
    total += bit * Math.pow(pengali, pangkat);
  }

  return total;
}

function displayResults(biner, pengali, total) {
  var steps = document.querySelector(".steps");
  var langkahFormula = document.getElementById("langkahFormula");
  var langkahCalculation = document.getElementById("langkahCalculation");
  var hasilTotal = document.getElementById("hasilTotal");

  var result = generateFormula(biner, pengali);

  langkahFormula.innerHTML = `${result.formula}`;
  langkahCalculation.innerHTML = `(${result.calculation})`;
  hasilTotal.innerHTML = total;

  // Menambahkan kelas 'blue-background' pada elemen hasilTotal
  langkahFormula.classList.add("blue-background");
  langkahCalculation.classList.add("blue-background");
  hasilTotal.classList.add("blue-background", "bold-text");

  steps.classList.remove("hidden");
}

function generateFormula(biner, pengali) {
  var formula = "";
  var calculation = "";

  for (var i = 0; i < biner.length; i++) {
    var bit = parseInt(biner[i]);
    var pangkat = biner.length - 1 - i;

    formula += `(${bit} × ${pengali}<sup>${pangkat}</sup>)`;

    calculation += bit * Math.pow(pengali, pangkat);

    if (i !== biner.length - 1) {
      formula += " + ";
      calculation += " + ";
    }
  }

  return { formula, calculation };
}

function displayError() {
  var steps = document.querySelector(".steps");
  steps.classList.add("hidden");

  // Tambahkan logika untuk menampilkan pesan error kepada pengguna (opsional)
}