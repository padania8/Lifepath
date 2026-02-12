const form = document.getElementById("lifepath-form");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");
const detail = document.getElementById("detail");

const clearResult = () => {
  result.textContent = "";
  detail.textContent = "";
};

const sumDigits = (value) => {
  let total = 0;
  for (const char of String(value)) {
    total += Number(char);
  }
  return total;
};

const reduceToSingleDigit = (value) => {
  let reduced = value;
  while (reduced > 9) {
    reduced = sumDigits(reduced);
  }
  return reduced;
};

const buildDetail = (digits) => {
  const parts = digits.split("");
  const initialSum = sumDigits(digits);
  let breakdown = `${parts.join(" + ")} = ${initialSum}`;
  let reduced = initialSum;
  while (reduced > 9) {
    const nextParts = String(reduced).split("");
    const nextSum = sumDigits(reduced);
    breakdown += ` -> ${nextParts.join(" + ")} = ${nextSum}`;
    reduced = nextSum;
  }
  return breakdown;
};

const calculateLifepath = (dateString) => {
  const digits = dateString.replace(/\D/g, "");
  if (!digits) {
    return { value: "", detail: "" };
  }
  const initialSum = sumDigits(digits);
  return {
    value: reduceToSingleDigit(initialSum),
    detail: buildDetail(digits),
  };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dateValue = birthdateInput.value;
  if (!dateValue) {
    clearResult();
    return;
  }
  const lifepath = calculateLifepath(dateValue);
  result.textContent = lifepath.value;
  detail.textContent = lifepath.detail;
});

birthdateInput.addEventListener("input", () => {
  clearResult();
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    clearResult();
  }
});

window.addEventListener("beforeunload", () => {
  clearResult();
});

clearResult();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
