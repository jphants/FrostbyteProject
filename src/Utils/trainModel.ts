import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

const IMAGE_SIZE = 224;
const NUM_CLASSES = 2;

type ClassDef = {
  name: string;
  label: number[];
  paths: string[];
};

const DATASET: ClassDef[] = [
  {
    name: "anemia",
    label: [1, 0],
    paths: ["/data/eyes/anemia/eyes01.png"]
  },
  {
    name: "no_anemia",
    label: [0, 1],
    paths: ["/data/eyes/no_anemia/eyes01.png"],
  },
];

// --------------------------------------------------
// Load image -> Tensor [224,224,3]
// --------------------------------------------------
async function loadImageTensor(path: string): Promise<tf.Tensor3D> {
  const img = new Image();
  img.src = path;
  img.crossOrigin = "anonymous";
  await img.decode();

  return tf.tidy(() => {
    const tensor = tf.browser
      .fromPixels(img)
      .resizeBilinear([IMAGE_SIZE, IMAGE_SIZE])
      .toFloat()
      .div(255);

    return tensor as tf.Tensor3D;
  });
}

// --------------------------------------------------
// TRAIN
// --------------------------------------------------
export async function train() {
  console.log("=== STARTING TRAINING ===");

  // Optional but recommended
  await tf.ready();
  console.log("TF backend:", tf.getBackend());

  // Load MobileNet
  const base = await mobilenet.load({
    version: 2,
    alpha: 1.0,
  });
  console.log("✅ MobileNet loaded");

  const embeddings: tf.Tensor[] = [];
  const labels: number[][] = [];

  console.log("\n=== GENERATING EMBEDDINGS ===");

  for (const cls of DATASET) {
    for (const path of cls.paths) {
      console.log(`Processing ${cls.name}: ${path}`);

      const img = await loadImageTensor(path);

      // MobileNet expects [H,W,3] or [1,H,W,3]
      const embedding = base.infer(img, true) as tf.Tensor;
      const squeezed = embedding.squeeze(); // [1280]

      embeddings.push(squeezed);
      labels.push(cls.label);

      img.dispose();
      embedding.dispose();
    }
  }

  // --------------------------------------------------
  // Create tensors
  // --------------------------------------------------
  console.log("\n=== CREATING DATASET ===");

  const xs = tf.stack(embeddings); // [N, 1280]
  const ys = tf.tensor2d(labels);  // [N, 2]

  console.log("xs shape:", xs.shape);
  console.log("ys shape:", ys.shape);

  // --------------------------------------------------
  // Build classifier
  // --------------------------------------------------
  console.log("\n=== BUILDING MODEL ===");

  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      inputShape: [xs.shape[1] ?? 1280], // 1280
      units: 128,
      activation: "relu",
    })
  );

  model.add(
    tf.layers.dropout({
      rate: 0.3,
    })
  );

  model.add(
    tf.layers.dense({
      units: NUM_CLASSES,
      activation: "softmax",
    })
  );

  model.summary();

  model.compile({
    optimizer: tf.train.adam(0.0001),
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  // --------------------------------------------------
  // Train
  // --------------------------------------------------
  console.log("\n=== TRAINING ===");

  await model.fit(xs, ys, {
    epochs: 30,          // alto porque hay pocos datos
    batchSize: 2,
    shuffle: true,
    verbose: 1,
  });

  console.log("🎉 Training complete");

  // --------------------------------------------------
  // Save
  // --------------------------------------------------
  await model.save("downloads://eyes-anemia-model");
  console.log("✅ Model saved");

  // --------------------------------------------------
  // Cleanup
  // --------------------------------------------------
  tf.dispose([xs, ys, ...embeddings]);
  console.log("🧹 Memory cleaned");
}
