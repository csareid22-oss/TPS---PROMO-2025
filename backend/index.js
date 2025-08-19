import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// root
app.get("/", (_req, res) => {
  res.send("Hello World! Your backend is live 🚀");
});

// health
app.get("/health", (_req, res) => {
  res.json({ ok: true, db: true });
});

// sample promo data
app.get("/api/promo", (_req, res) => {
  res.json({
    campaign: "TPS Promotional 2025",
    headline: "Save time with TPS forms",
    tagline: "Fast. Simple. Compliant.",
    features: ["One-click export", "Guided entry", "Auto-save drafts"],
    cta: { text: "Get Started", url: "https://tps-promo-2025.onrender.com" }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server listening on ${port}`);
});
