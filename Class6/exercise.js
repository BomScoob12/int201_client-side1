function isImageFileExtension(filename) {
  const regEx = /[.]/;
  const indexOfDot = filename.search(regEx);
  console.log(indexOfDot);
  return filename.substring(indexOfDot, filename.length);
}

function isImageFileExtension1(filename) {
  const indexOfDot = filename.indexOf(".");
  return filename.substring(indexOfDot, filename.length);
}

function isImageFileExtension2(filename) {
  return (
    filename.endsWith(".jpg") ||
    filename.endsWith(".png") ||
    filename.endsWith(".svg") ||
    filename.endsWith(".gif")
  );
}

function isImageFileExtension3(filename) {
  return filename.substring(filename.lastIndexOf("."));
}

const testfn = isImageFileExtension3("Test.txt");
console.log(testfn);
