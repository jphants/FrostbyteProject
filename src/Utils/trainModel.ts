import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

const NUM_CLASSES = 3;

export async function train() {
  try {
    console.log("=== STARTING TRAINING ===");
    
    const base = await mobilenet.load({
      version: 2,
      alpha: 1.0,
    });
    console.log("✅ MobileNet loaded");

    const embeddings: tf.Tensor[] = [];
    const labels: number[][] = [];

    console.log("\n=== GENERATING EMBEDDINGS ===");
    for (let i = 0; i < 10; i++) {
      const img = tf.randomUniform([224, 224, 3]);
      console.log(`Image ${i} shape:`, img.shape, "rank:", img.rank);
      
      const embedding = base.infer(img, true) as tf.Tensor;
      console.log(`Embedding ${i} shape BEFORE squeeze:`, embedding.shape, "rank:", embedding.rank);
      
      // FIX: Squeeze out the batch dimension [1, 1280] -> [1280]
      const squeezed = embedding.squeeze();
      console.log(`Embedding ${i} shape AFTER squeeze:`, squeezed.shape, "rank:", squeezed.rank);
      
      embeddings.push(squeezed);
      labels.push([1, 0, 0]); // one-hot
      
      img.dispose();
      embedding.dispose(); // Dispose the original embedding
    }

    console.log("\n=== CREATING TENSORS ===");
    const xs = tf.stack(embeddings);
    console.log("xs shape:", xs.shape, "rank:", xs.rank);
    
    const ys = tf.tensor2d(labels);
    console.log("ys shape:", ys.shape, "rank:", ys.rank);

    console.log("\n=== BUILDING MODEL ===");
    const model = tf.sequential();
    
    model.add(
      tf.layers.dense({
        units: 128,
        activation: "relu",
        inputShape: [xs.shape[1] ?? 1280], // Should be [1280]
      })
    );
    console.log("✅ First dense layer added");
    
    model.add(
      tf.layers.dense({
        units: NUM_CLASSES,
        activation: "softmax",
      })
    );
    console.log("✅ Output layer added");

    console.log("\n=== MODEL SUMMARY ===");
    model.summary();

    model.compile({
      optimizer: "adam",
      loss: "categoricalCrossentropy",
      metrics: ["accuracy"],
    });
    console.log("✅ Model compiled");

    console.log("\n=== TRAINING ===");
    await model.fit(xs, ys, {
      epochs: 10,
      batchSize: 4,
      verbose: 1,
    });
    console.log("🎉 Training complete!");

    await model.save("downloads://my-model");
    console.log("✅ Model saved");

    // Clean up memory
    tf.dispose([xs, ys, ...embeddings]);
    console.log("✅ Memory cleaned up");
    
  } catch (error) {
    console.error("❌ ERROR in train():", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    throw error;
  }
}