// ここからコードを書いてください
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  lengthUnit.forEach(({ name, base }) => {
    const optFrom = document.createElement("option");
    optFrom.textContent = name;
    optFrom.value = String(base);
    converterFrom.appendChild(optFrom);

    const optTo = document.createElement("option");
    optTo.textContent = name;
    optTo.value = String(base);
    converterTo.appendChild(optTo);
  });

  const meterIndex = lengthUnit.findIndex((u) => u.name === "meter");
  const kmIndex = lengthUnit.findIndex((u) => u.name === "kilometer");

  converterFrom.selectedIndex = meterIndex; // meter
  converterTo.selectedIndex = kmIndex; // kilometer

  function Converter() {
    const inputNum = parseFloat(converterInput.value);
    const fromBase = parseFloat(converterFrom.value);
    const toBase = parseFloat(converterTo.value);
    if (isNaN(inputNum)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    const meterValue = inputNum * fromBase;
    const result = meterValue / toBase;
    const resultFixed = result.toFixed(3);

    const fromName =
      converterFrom.options[converterFrom.selectedIndex].textContent;
    const toName = converterTo.options[converterTo.selectedIndex].textContent;

    converterResult.textContent = `${inputNum} ${fromName} = ${resultFixed} ${toName}`;
  }

  converterForm.addEventListener("input", Converter);
}
