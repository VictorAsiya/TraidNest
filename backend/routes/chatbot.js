const express = require('express');
const router = express.Router();

// 📦 Mock product description generator
function generateListing(prompt = "") {
  if (!prompt || typeof prompt !== "string") {
    return "🤖 Prompt missing or invalid. Please enter a product description.";
  }

  const keywords = prompt.toLowerCase();
  let response = "🤖 Sorry, I couldn't generate a description. Try a different product.";

  if (keywords.includes("samsung")) {
    response = "📱 Samsung Galaxy A23 — 6GB RAM, 128GB storage. Smooth multitasking. ₦85,000 in Ilorin.";
  } else if (keywords.includes("infinix")) {
    response = "📱 Infinix Zero 20 — sleek design, sharp camera, ₦100,000 in Kaduna.";
  } else if (keywords.includes("hp")) {
    response = "💻 HP EliteBook — Core i5, 8GB RAM. Reliable performance. ₦150,000 in Abuja.";
  } else if (keywords.includes("dell")) {
    response = "💻 Dell Latitude 5400 — 8GB RAM, Core i5. ₦140,000 in Ibadan.";
  } else if (keywords.includes("iphone")) {
    response = "📱 iPhone XR — 64GB, battery health 86%. ₦180,000 in Lagos.";
  } else if (keywords.includes("tecno")) {
    response = "📱 Tecno Spark 10 — 128GB, great camera. ₦70,000 in Port Harcourt.";
  } else if (keywords.includes("nike")) {
    response = "👟 Nike Air Force 1 — size 44, clean sole. ₦28,000 in Benin City.";
  } else if (keywords.includes("wig")) {
    response = "💇 Bodywave Wig (12 inches) — bouncy, soft, ₦25,000 in Enugu.";
  } else if (keywords.includes("backpack")) {
    response = "🎒 Multipocket Laptop Backpack — rainproof, padded interior. ₦15,000 in Jos.";
  } else if (keywords.includes("watch")) {
    response = "⌚ Black Metal Wristwatch — sleek and formal. ₦12,000 in Abeokuta.";
  }

  return response;
}

// 🚀 Chatbot POST route
router.post('/generate-description', async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = generateListing(prompt);
    res.json({ result });
  } catch (err) {
    console.error("❌ Error in chatbot route:", err);
    res.status(500).json({ error: "Failed to generate description." });
  }
});

module.exports = router;
