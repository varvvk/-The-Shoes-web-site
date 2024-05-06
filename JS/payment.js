document.querySelector('.expiry-date').addEventListener('input', function (e) {
    let input = e.target.value;
    if (input.length === 2 && !input.includes('/')) {
      input += '/';
      e.target.value = input;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.payment-form');

    form.addEventListener('submit', function(event) {
        var cardNumberInput = form.querySelector('input[name="card-number"]');
        var expiryDateInput = form.querySelector('input[name="expiry-date"]');
        var securityCodeInput = form.querySelector('input[name="security-code"]');
        var nameInput = form.querySelector('input[name="name"]');
        var cardNumberValue = cardNumberInput.value.replace(/\s/g, '');
        var expiryDateValue = expiryDateInput.value.trim();
        var securityCodeValue = securityCodeInput.value.trim();
        var nameValue = nameInput.value.trim();
        var cardNumberPattern = /^\d{16}$/;
        var expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        var securityCodePattern = /^\d{3}$/;
        var namePattern = /^.{1,} .{1,}$/;

        if (!cardNumberPattern.test(cardNumberValue)) {
            alert('Пожалуйста, введите 16 цифр номера карты.');
            event.preventDefault();
            return;
        }

        if (!expiryDatePattern.test(expiryDateValue)) {
            alert('Пожалуйста, введите срок действия карты в формате MM/YY.');
            event.preventDefault();
            return;
        }

        if (!securityCodePattern.test(securityCodeValue)) {
            alert('Пожалуйста, введите 3 цифры CVV/CVC.');
            event.preventDefault();
            return;
        }

        if (!namePattern.test(nameValue)) {
            alert('Пожалуйста, введите имя держателя карты.');
            event.preventDefault();
            return;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var cardNumberInput = document.querySelector('input[name="card-number"]');
    var cvvInput = document.querySelector('input[name="security-code"]');
    var nameInput = document.querySelector('input[name="name"]');

    cardNumberInput.addEventListener('input', function(event) {
      var value = event.target.value.replace(/\D/g, '').substring(0, 16);
      value = value.replace(/(\d{4})/g, '$1 ').trim();
      event.target.value = value;
    });

    nameInput.addEventListener('input', function(event) {
      event.target.value = event.target.value.toUpperCase();
    });
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}