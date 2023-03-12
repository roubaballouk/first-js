function calculateAverage() {
    // Get the input values
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);
    var n6 = parseFloat(document.getElementById("n6").value);
    var n7 = parseFloat(document.getElementById("n7").value);
    var n8 = parseFloat(document.getElementById("n8").value);
    var n9 = parseFloat(document.getElementById("n9").value);
    var n10 = parseFloat(document.getElementById("n10").value);

    // Calculate the average
    var sum = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
    var average = sum / 10;

    // Display the result
    document.getElementById("result").innerHTML = "The average is: " + average;
  }