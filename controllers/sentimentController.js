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
const Text = require("../models/Text");

exports.analyzeSentiment = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text input is required" });
  }
  try {
    const sentiment =
      sentimentAnalysis.SentimentIntensityAnalyzer.polarity_scores(text);

    // Create a new Text document
    const newText = new Text({
      text: text,
      sentiment: sentiment,
    });

    // Save the document to MongoDB
    await newText.save();

    res.status(201).json({
      message: "Sentiment analyzed and saved successfully",
      sentiment,
    });
  } catch (error) {
    console.error("Error saving sentiment analysis:", error);
    res.status(500).json({ error: "Failed to analyze and save sentiment" });
  }
};
