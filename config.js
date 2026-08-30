/* STONE PWA — registre des univers · COQUE BÊTA (amis).
   Ne contient AUCUNE adresse personnelle : Invest pointe sur le Starter
   multi-utilisateur, Money sur son canal authentifié privé et Ledge sur le
   déploiement bêta anonyme dédié (@19). */
window.STONE_PWA_INSTANCE = "beta";
window.STONE_PWA_UNIVERSES = [
  {
    key: "invest",
    label: "Invest",
    tagline: "Mon premier portefeuille",
    glyph: "◈",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbwZ4LbcsS7jHv38XReH0l_l70JOKp6biJr1vskYDJBxvrFfdQ_kHGp_v61reoP-TToEJQ/exec",
    msgPrefix: "STONE_STARTER_PWA",
    enabled: true
  },
  {
    key: "money",
    label: "Money",
    tagline: "Du revenu au patrimoine",
    glyph: "◇",
    accent: "#e0c18a",
    url: "https://script.google.com/macros/s/AKfycbxPNnyqKv1IiSclCvDSQKPYx2ZUEm4guXz-2FXXn_wYWskXN5VA-rCrJ66KkvvIlu34bg/exec",
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
