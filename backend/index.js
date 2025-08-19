import express from "express";
import cors from "cors";

const app = express();

// Allow your dev site to call the API (for dev, allow all)
app.use(cors()); // you can do: cors({ origin: "*" })

app.get("/", (_req, res) => {
  res.send("Hello World! Your backend is live 🚀");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, db: true });
});

app.get("/api/promo", (_req, res) => {
  res.json({
    campaign: "TPS Promotional 2025",
    headline: "Save time with TPS forms",
    tagline: "Fast. Simple. Compliant.",
    features: ["One‑click export", "Guided entry", "Auto‑save drafts"],
    cta: { text: "Get Started", url: "https://tps-promo-2025.onrender.com" }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server listening on ${port}`));
