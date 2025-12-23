// ここからコードを書いてください
export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterLink = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // ✅ 初期状態（Home表示）
  converterSection.classList.add("hidden");
  homeSection.classList.remove("hidden");

  // ✅ Homeクリック → Home表示 / Converter非表示
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  // ✅ Converterクリック → Converter表示 / Home非表示
  converterLink.addEventListener("click", (e) => {
    e.preventDefault();
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
