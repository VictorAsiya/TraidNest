const express = require('express');
const router = express.Router();

// POST route to simulate AI description generation router.post('/generate-description', async (req, res) => {
  const { prompt } = req.body;

  // Start with a default fallback
  let fakeContent = "🤖 Sorry, I couldn't generate a description. Please check your prompt.";

  // 👇 Add conditions to simulate responses for different products
if (prompt.includes("Samsung")) {
  fakeContent = "📱 Product Title: Sleek Samsung Galaxy A23\n\n📝 Description: Gently used Galaxy A23 with 6GB RAM and 128GB storage. Smooth and reliable for daily tasks. Priced at ₦85,000 in Ilorin.";
} else if (prompt.includes("Infinix")) {
  fakeContent = "📱 Product Title: Stylish Infinix Zero 20\n\n📝 Description: Fairly used Infinix Zero 20, 128GB storage. Sharp camera, solid battery, excellent value at ₦100,000. Located in Kaduna.";
} else if (prompt.includes("HP")) {
  fakeContent = "💻 Product Title: Sleek & Sturdy HP EliteBook\n\n📝 Description: Used HP EliteBook with Intel Core i5 and 8GB RAM, ideal for students or remote work. Priced at ₦150,000 in Abuja.";
} else if (prompt.includes("Dell")) {
  fakeContent = "💻 Product Title: Dependable Dell Latitude 5400\n\n📝 Description: A well-kept Dell Latitude with 8GB RAM, Core i5. Sleek design and powerful performance. ₦140,000 in Ibadan.";
} else if (prompt.includes("iPhone")) {
  fakeContent = "📱 Product Title: Premium Used iPhone XR\n\n📝 Description: Stylish iPhone XR, 64GB, battery health 86%, great condition. Yours for ₦180,000 in Lagos.";
} else if (prompt.includes("Tecno")) {
  fakeContent = "📱 Product Title: Budget-Friendly Tecno Spark 10\n\n📝 Description: A clean Tecno Spark 10, 128GB, decent camera and sleek body. Great for everyday use. ₦70,000 in Port Harcourt.";
} else if (prompt.includes("Nike")) {
  fakeContent = "👟 Product Title: Classic Nike Air Force 1\n\n📝 Description: Fairly used white Nike AF1 sneakers, size 44, clean sole, strong grip. Just ₦28,000 in Benin City.";
} else if (prompt.includes("Wig")) {
  fakeContent = "💇 Product Title: Natural Bodywave Wig (12 inches)\n\n📝 Description: Pre-owned human hair wig, 12”, medium density, bouncy and soft. ₦25,000 only in Enugu.";
} else if (prompt.includes("Backpack")) {
  fakeContent = "🎒 Product Title: Durable Multipocket Backpack\n\n📝 Description: Used laptop backpack with padded interior, side pockets, rainproof. ₦15,000 in Jos.";
} else if (prompt.includes("Watch")) {
  fakeContent = "⌚ Product Title: Elegant Black Metal Watch\n\n📝 Description: A sleek pre-owned black wristwatch with adjustable clasp. Perfect for formal wear. ₦12,000 in Abeokuta.";
}

  // Return the simulated AI response
  return res.json({ result: fakeContent });


module.exports = router;
