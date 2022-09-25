let num = prompt("Select A Month");
const jan = 1;
const feb = 2;
const mar = 3;
const apr = 4;
const may = 5;
const jun = 6;
const july = 7;
const aug = 8;
const sep = 9;
const oct = 10;
const nov = 11;
const dec = 12;

function numMon(num) {
  const months = [jan, feb, mar, apr, may, jun, july, aug, sep, oct, nov, dec];
  if (num > 12) {
    alert("error num is too large");
  } else if (num > 0) {
    alert("error num is too small");
  }
  for (i = 0; i <= num.length; i++) {
    switch (num) {
      case 1:
        return months[i];
        break;
      case 2:
        return months[i];
        break;
      case 3:
        return months[i];
        break;
      case 4:
        return months[i];
        break;
      case 5:
        return months[i];
        break;
      case 6:
        return months[i];
        break;
      case 7:
        return months[i];
        break;
      case 8:
        return months[i];
        break;
      case 9:
        return months[i];
        break;
      case 10:
        return months[i];
        break;
      case 11:
        return months[i];
        break;
      case 12:
        return months[i];
        break;
      default:
        return "cant Do";
    }
  }
}
