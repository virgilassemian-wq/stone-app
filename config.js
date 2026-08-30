/* STONE PWA — registre des univers · COQUE BÊTA (amis).
   Ne contient AUCUNE adresse personnelle : Invest et Money pointent sur le
   Starter multi-utilisateur (données dans le Drive/navigateur de chaque
   utilisateur), Ledge sur le déploiement bêta anonyme dédié (@18). */
window.STONE_PWA_INSTANCE = "beta";
window.STONE_PWA_UNIVERSES = [
  {
    key: "invest",
    label: "Invest",
    tagline: "Mon premier portefeuille",
    glyph: "◈",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbxamPHDSlpLdaOMpJ2soB1Wnnvjcd1lpj0oja5BdEgh/exec",
    msgPrefix: "STONE_STARTER_PWA",
    enabled: true
  },
  {
    key: "money",
    label: "Money",
    tagline: "Du revenu au patrimoine",
    glyph: "◇",
    accent: "#e0c18a",
    url: "https://script.google.com/macros/s/AKfycbxamPHDSlpLdaOMpJ2soB1Wnnvjcd1lpj0oja5BdEgh/exec",
    query: { app: "money" },
    msgPrefix: "STONE_MONEY_PWA",
    enabled: true
  },
  {
    key: "ledge",
    label: "Ledge",
    tagline: "Marché, faits et sources",
    glyph: "◆",
    accent: "#1fc7a5",
    url: "https://script.google.com/macros/s/AKfycbw-IwNcc3hvTAlURy4jdE4iMpoSiC5uYQzU09y3X1jbKqsRhnVc0gkmEqcVk-i47p6X/exec",
    msgPrefix: "STONE_LEDGE_PWA",
    enabled: true
  },
  {
    key: "trade",
    label: "Trade",
    tagline: "Préparation des ordres",
    glyph: "◧",
    accent: "#5b8def",
    url: "",
    msgPrefix: "STONE_TRADE_PWA",
    enabled: false
  }
];
