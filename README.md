# Anemia Recovery Mobile App

## Inspiration
Anemia is a problem in South America, Africa and underdeveloped countries, specially in rural areas.

## What it does

## How we built it
We researched about common problems in our country, found diabetes, hipertension and anemia.  
We looked for apps or proposals for aiding in the consequences of the above.  

Then we found that not only in Peru anemia was relevant but in most of South America and Africa.  
So we gathered recipes and affordable techniques for families to fight anemia.  

Since diagnosing anemia might not be available for everyone, specially in rural areas, we propose a pipeline for extracting hemoglobin values from eye images and nails pictures.  

We used Figma for prototyping.  
We built the APK standalone using Capacitor so we can wrap the React project.

---

## ML Models

### Hemoglobin Prediction Performance

We used a publicly available dataset from Kaggle ("Eyes Defy Anemia") to predict hemoglobin (Hb) levels from eye images.

Hemoglobin values in the dataset range from **7.0 g/dL to 17.4 g/dL**, covering cases from low Hb levels (anemia) to high-normal values.

Our model achieved a **Mean Absolute Error (MAE) of 0.78 g/dL**.

The MAE represents the average absolute difference between the predicted hemoglobin value and the true value. In practical terms, this means that the model’s prediction deviates from the real laboratory measurement by approximately **0.78 g/dL on average**.

Considering the full range of Hb values in the dataset (about 10 g/dL), this error represents a relatively small deviation across the spectrum of possible values.

---

## Challenges we ran into
We train a model with ts since python model has some issues with compatibility to export to a bin from a keras.  

Making a backend to send the images would be easier but internet access is restricted so we had to make a portable version.  

I never used ts, I'm python dev, but it wasn't difficult to change languages, but it's still a shock-ish turning from python to typescript.  

We first designed a web app for people to access through internet, but there is no internet guaranteed in rural areas we had to wrap everything onto a apk.

---

## Accomplishments that we're proud of

## What we learned
I've never trained a model in ts, it is quite similar actually.  

I also got a simple system for the app to support various languages.  

I've never worked with Capacitor, I thought we would have to build everything on Flutter or other frameworks for us to be able to export to Android.

---

## What's next for AnemiaGuard

---

## Running the code
Run `npm i` to install the dependencies.  

Run `npm run dev` to start the development server.

## Building the APK
Build with npm: `npm run build`  

Wrap build for Android: `npx cap sync`  

Open Android Studio: `npx cap open android`
