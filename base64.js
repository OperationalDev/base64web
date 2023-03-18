const encodeButton = document.getElementById("encode-button");
const decodeButton = document.getElementById("decode-button");
const inputTextArea = document.getElementById("input");
const outputTextArea = document.getElementById("output");

encodeButton.addEventListener("click", function() {
  const inputText = inputTextArea.value.trim();

  if (inputText.length === 0) {
    outputTextArea.value = "";
    return;
  }

  outputTextArea.value = btoa(inputText);
});

decodeButton.addEventListener("click", function() {
  const inputText = inputTextArea.value.trim();

  if (inputText.length === 0) {
    outputTextArea.value = "";
    return;
  }

  try {
    outputTextArea.value = atob(inputText);
  } catch (e) {
    outputTextArea.value = "Invalid base64 input";
  }
});