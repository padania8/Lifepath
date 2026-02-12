const form = document.getElementById("lifepath-form");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");
const detail = document.getElementById("detail");
const debtOutput = document.getElementById("debt");

const karmicDebtNumbers = new Set([13, 14, 16, 19]);

const clearResult = () => {
  result.textContent = "";
  detail.textContent = "";
  debtOutput.textContent = "";
  result.classList.remove("result--debt");
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

const getReductionSteps = (digits) => {
  const steps = [];
  let total = sumDigits(digits);
  steps.push(total);
  while (total > 9) {
    total = sumDigits(total);
    steps.push(total);
  }
  return steps;
};

const buildDetail = (digits, steps) => {
  const parts = digits.split("");
  let breakdown = `${parts.join(" + ")} = ${steps[0]}`;
  for (let i = 1; i < steps.length; i += 1) {
    const nextParts = String(steps[i - 1]).split("");
    breakdown += ` -> ${nextParts.join(" + ")} = ${steps[i]}`;
  }
  return breakdown;
};

const getKarmicDebt = (steps) =>
  steps.find((step) => karmicDebtNumbers.has(step)) ?? null;

const calculateLifepath = (dateString) => {
  const digits = dateString.replace(/\D/g, "");
  if (!digits) {
    return { value: "", detail: "", debt: null };
  }
  if (digits.length !== 8) {
    return { value: "", detail: "", debt: null };
  }
  const steps = getReductionSteps(digits);
  const debt = getKarmicDebt(steps);
  return {
    value: steps[steps.length - 1],
    detail: buildDetail(digits, steps),
    debt,
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
  if (lifepath.debt) {
    result.classList.add("result--debt");
    debtOutput.textContent = `Dette karmique: ${lifepath.debt}/${reduceToSingleDigit(lifepath.debt)}`;
  } else {
    result.classList.remove("result--debt");
    debtOutput.textContent = "";
  }
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
