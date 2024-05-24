// USES TOXICITY TENSERFLOW MODLE FOR ANALYSIS

// const toxicity = require("@tensorflow-models/toxicity");
// const threshold = 0.9;

// let model;

// toxicity.load(threshold).then((mod) => {
//   model = mod;
// });

// exports.analyzeSentiment = async (req, res) => {
//   const text = req.body.text;
//   if (!text) {
//     return res.status(400).json({ error: "Text input is required" });
//   }
//   const predictions = await model.classify(text);
//   res.json(predictions);
// };

// USES VENDER-SENTIMENTS MODLE FOR ANALYSIS

const sentimentAnalysis = require("vader-sentiment");
exports.analyzeSentiment = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text input is required" });
  }
  const sentiment =
    await sentimentAnalysis.SentimentIntensityAnalyzer.polarity_scores(text);
  res.json({ sentiment });
};
