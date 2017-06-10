function average(scores) {
  //add all scores together
  var total = 0;

  for (var i = 0; i < scores.length; i++) {
    //Total up the scores
    total += scores[i];
    var avg = 0;
    // divide by total and round to whole number
    avg = Math.round((total / scores.length), 1);
  }
  console.log(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);