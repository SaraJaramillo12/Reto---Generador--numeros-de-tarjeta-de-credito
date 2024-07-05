function generateCardNumber() {
  const cardType = document.getElementById("cardType").value;
  let prefix, length;

  switch (cardType) {
    case "visa":
      prefix = "4";
      length = 16;
      break;
    case "mastercard":
      prefix = "5";
      length = 16;
      break;
    case "amex":
      prefix = "3";
      length = 15;
      break;
    default:
      alert("Seleccione un tipo de tarjeta válido.");
      return;
  }

  let cardNumber = prefix;
  for (let i = 0; i < length - 1; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }

  // Validar usando el algoritmo de Luhn
  if (validateLuhn(cardNumber)) {
    document.getElementById("cardNumber").innerText = cardNumber;
  } else {
    generateCardNumber(); // Intentar nuevamente si no es válido
  }
}

function validateLuhn(cardNumber) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
