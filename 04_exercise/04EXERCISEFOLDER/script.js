let books = [
    ["Cheque book","Vasdev Mohi",25],
    ["The Overstory","Richard Powers",35],
    ["Elephant in the Womb","Kalki Koechlin",20]
];

books.sort(function (a, b) {
  return a.localeCompare(b);
});