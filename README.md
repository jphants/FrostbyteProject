
  # Anemia Recovery Mobile App

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Building the apk

  Build with npm `npm run build`
  Wrap build for android `npx cap sync`
  Open android studio `npx cap open android`

## Inspiration
Anemia is a problem in South America, Africa and underdeveloped countries, specially in rural areas
## What it does

## How we built it
We researched about common problems in our country, found diabetes, hipertension and anemia.
We looked for apps or proposals for aiding in the consequences of the above.
Then we found that not only in Peru anemia was relevant but in most of South-america, and Africa.
So we gathered recipes and affordable techniques for families to fight anemia
Since diagnosing anemia might not be available for everyone, specially in rural areas, we propose a pipeline for extracting hemoglobin values from eye images and nails pictures.

We used figma for prototyping
We build apk standalone using capacitor so we can wrap the react project

## Challenges we ran into
We train a model with ts since python model has some issues with compatibility to export to a bin from a keras
Making a backend to send the images would be easier but internet access is restricted so we had to make a portable version
I never used ts, i'm python dev, but it wasn't difficult to change languages, but it's still a shock-ish. Turning from python to typescript.
We first designed a web app for people to access trough internet, but there is no internet guaranteed in rural areas we had to wrap everything onto a 
## Accomplishments that we're proud of

## What we learned

## What's next for AnemiaGuard
