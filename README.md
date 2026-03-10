<h1 align="center">Sign Translate</h1>

<p align="center">
  <i>
    Revolutionizing Sign Language Communication with Cutting-Edge Real-Time Translation Models.
    <br>
    Enjoy seamless Sign Language Translation on the web.
  </i>
</p>

<p align="center">
  <a href="https://sign.mt/"><strong>sign.mt</strong></a>
  <br>
</p>

<p align="center">
  <a href="https://github.com/sign/.github/blob/main/CONTRIBUTING.md">Contribution Guidelines</a>
  ·
  <a href="https://github.com/sign/translate/issues">Submit an Issue</a>
</p>

<p align="center">
  <a href="https://github.com/sign/translate/actions/workflows/client.yml">
    <img src="https://github.com/sign/translate/actions/workflows/client.yml/badge.svg" alt="Client Build Test Status Badge" />
  </a>
  <a href="https://github.com/sign/translate/actions/workflows/server.yml">
    <img src="https://github.com/sign/translate/actions/workflows/server.yml/badge.svg" alt="Server Build Test Status Badge" />
  </a>
  <a href="https://coveralls.io/github/sign/translate?branch=master">
    <img src="https://coveralls.io/repos/github/sign/translate/badge.svg?branch=master" alt="Coverage Status Badge" />
  </a>
  <a href="https://github.com/sign/translate/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="License: CC BY-NC-SA 4.0 Badge" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/sign/translate/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/sign/translate" alt="GitHub Stars for sign/translate" />
  </a>
  <a href="https://github.com/sign/translate/network/members" target="_blank">
    <img src="https://img.shields.io/github/forks/sign/translate" alt="GitHub Forks for sign/translate" />
  </a>
  <a href="https://github.com/sign/translate/stargazers" target="_blank">
    <img src="https://img.shields.io/github/contributors/sign/translate" alt="GitHub Contributors for sign/translate" />
  </a>
  <a href="https://github.com/sign/translate/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/sign/translate" alt="GitHub Issues for sign/translate" />
  </a>
</p>

<p align="center">
  <a href="https://sign.mt" target="_blank">
    <img src="src/assets/promotional/about/hero.webp" alt="Sign Language Translation Demo Image" />
  </a>
</p>

<hr>

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Development](#development)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Citation](#citation)
- [License](#license)

<hr>

## Overview

**sign.mt** is an open research project focused on advancing real-time sign language translation between spoken and signed languages. It combines linguistic research, computer vision, and machine learning to make communication between Deaf and hearing individuals more seamless.

The application supports **40+ signed and spoken languages** and runs entirely in the browser using modern Web APIs — no app installation required.

Key goals:
- Make sign language translation accessible to everyone, for free
- Advance open research on signed language technologies
- Build a collaborative community around sign language accessibility

<hr>

## Key Features

### [Sign Language Production](https://github.com/sign/translate/wiki/Spoken-to-Signed) — Spoken to Signed

Converts spoken language text or audio into sign language animations.

```
┌─────────────────────┐
│Spoken Language Audio│                                                              ┌─────────┐
└─────────┬───────────┘                                                  ┌──────────►│Human GAN│
          │                                                              │           └─────────┘
          ▼                                                              │
┌────────────────────┐     ┌───────────────┐     ┌───────────┐    ┌──────┴──────┐    ┌───────────────┐
│Spoken Language Text├────►│Normalized Text├────►│SignWriting├───►│Pose Sequence├───►│Skeleton Viewer│
└─────────┬──────────┘     └───────────────┘     └───────────┘    └──────┬──────┘    └───────────────┘
          │                        ▲                   ▲                 │
          ▼                        │                   │                 │           ┌─────────┐
┌───────────────────────┐          │                   │                 └──────────►│3D Avatar│
│Language Identification├──────────┘───────────────────┘                             └─────────┘
└───────────────────────┘
```

**Pipeline:**
1. **Speech Recognition** — converts spoken audio to text via Web Speech API
2. **Language Detection** — automatically identifies the spoken language using `cld3`
3. **Text Normalization** — normalizes text for accurate translation (optionally via OpenAI API)
4. **SignWriting Translation** — converts normalized text to SignWriting notation
5. **Pose Sequence Generation** — maps SignWriting to a 3D human pose sequence
6. **Rendering** — displays the result as a skeleton viewer or 3D avatar

### [Sign Language Translation](https://github.com/sign/translate/wiki/Signed-to-Spoken) — Signed to Spoken

Converts sign language video (camera or upload) to spoken language text and audio.

```
┌──────────────────────────┐                                ┌────────────────────┐
│Upload Sign Language Video│                      ┌────────►│Spoken Language Text│
└──────────┬───────────────┘                      │         └──────────┬─────────┘
           │                                      │                    │
           │          ┌────────────┐       ┌──────┴────┐               │
           ├─────────►│Segmentation├──────►│SignWriting│               │
           │          └────────────┘       └───────────┘               │
           │                                                           ▼
┌──────────┴────────────────┐                               ┌─────────────────────┐
│Camera Sign Language Video │                               │Spoken Language Audio│
└───────────────────────────┘                               └─────────────────────┘
```

**Pipeline:**
1. **Video Input** — accepts live camera feed or uploaded video files
2. **Pose Estimation** — uses MediaPipe Holistic to extract body, hand, and face landmarks
3. **Segmentation** — splits continuous signing into individual sign segments
4. **SignWriting Recognition** — converts pose data to SignWriting notation
5. **Spoken Language Translation** — translates SignWriting to spoken language text
6. **Text-to-Speech** — synthesizes natural speech from the translated text

### Additional Features

- **40+ languages** — broad coverage of signed and spoken languages
- **Progressive Web App (PWA)** — works offline, installable from the browser
- **Privacy-first** — processing happens locally on-device wherever possible
- **Accessibility** — designed with and for the Deaf community
- **Open source** — full source code available for research and contribution

<hr>

## Architecture

sign.mt is a **client-side Angular application** with a lightweight Firebase backend for advanced features.

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
│                                                         │
│  ┌──────────┐  ┌───────────┐  ┌──────────────────────┐  │
│  │ Angular  │  │  NGXS     │  │   Web Workers        │  │
│  │   21     │  │  Store    │  │  (ML Inference)      │  │
│  └──────────┘  └───────────┘  └──────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │              ML / Vision Layer                    │   │
│  │  TensorFlow.js │ MediaPipe │ WebGL / WebGPU       │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          │
                    (optional)
                          │
┌─────────────────────────────────────────────────────────┐
│                Firebase Backend                         │
│  Cloud Functions │ App Check │ Firebase Storage         │
└─────────────────────────────────────────────────────────┘
```

All ML inference runs directly in the browser using Web Workers to keep the UI thread responsive. Remote calls are made only for text normalization and advanced translation features.

<hr>

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 |
| UI Components | Ionic Angular |
| State Management | NGXS |
| ML Inference | TensorFlow.js (WebGL / WebGPU / WASM backends) |
| Pose Estimation | MediaPipe Holistic |
| NLP | cld3-asm (language detection), OpenAI API (normalization) |
| Sign Rendering | SignWriting, pose-viewer, Three.js (3D avatar) |
| Backend | Firebase (Cloud Functions, App Check, Storage) |
| i18n | @jsverse/transloco |
| Testing | Karma + Jasmine |
| Linting | ESLint + Angular ESLint |
| Formatting | Prettier |

<hr>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/get-npm) v9 or higher

### Setting Up the Project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

The app will be available at `http://localhost:4200`.

### Build

Build for production:

```bash
npm run build
```

Full production build (includes terms, privacy, sitemap, licenses, and docs):

```bash
npm run build:full
```

### Linting

```bash
npm run lint
```

<hr>

## Project Structure

```
translate/
├── src/
│   ├── app/
│   │   ├── components/       # Shared UI components
│   │   ├── core/             # Services, state, and core logic
│   │   ├── directives/       # Angular directives
│   │   ├── modules/          # Feature modules
│   │   └── pages/
│   │       ├── landing/      # Landing, about, FAQ, privacy, terms pages
│   │       ├── translate/    # Main translation interface
│   │       │   ├── spoken-to-signed/
│   │       │   ├── signed-to-spoken/
│   │       │   └── language-selector/
│   │       └── settings/
│   └── assets/
│       ├── icons/
│       └── promotional/
├── functions/                # Firebase Cloud Functions
├── docs/                     # Documentation site (VitePress)
├── tools/                    # Build and utility scripts
├── LICENSE.md
├── CHANGELOG.md
└── README.md
```

<hr>

## Testing

Run all tests with code coverage:

```bash
npm test
```

Run in a specific browser:

```bash
npm run test:chrome
npm run test:firefox
```

Run in CI mode (headless):

```bash
npm run test:ci
```

<hr>

## Deployment

The application is deployed to Firebase Hosting:

```bash
npm run deploy
```

The full deployment pipeline is managed via GitHub Actions (`.github/workflows/`).

<hr>

## Contributing

Join us on the journey to revolutionize sign language communication.
Follow our progress on the [Project Board][project-board],
shape the project's future,
and delve deeper into our vision and plans in the [Wiki][wiki].

Wish to report a bug, contribute some code, or enhance documentation? Fantastic!
Check our guidelines for [contributing][contributing] and then explore our issues marked as <kbd>[help wanted](https://github.com/sign/translate/labels/help%20wanted)</kbd> or <kbd>[good first issue](https://github.com/sign/translate/labels/good%20first%20issue)</kbd>.

**Find this useful? Give our repo a star.**

[![Stargazers repo roster for @sign/translate](https://reporoster.com/stars/sign/translate)](https://github.com/sign/translate/stargazers)

[wiki]: https://github.com/sign/translate/wiki/Spoken-to-Signed
[contributing]: https://github.com/sign/.github/blob/main/CONTRIBUTING.md
[project-board]: https://github.com/sign/translate/projects/1

<hr>

## Citation

If you use sign.mt in your research, please cite:

```bibtex
@misc{moryossef2023signmt,
    title={sign.mt: Effortless Real-Time Sign Language Translation},
    author={Moryossef, Amit},
    howpublished={\url{https://sign.mt/}},
    year={2023}
}
```

<hr>

## License

sign.mt is available under a dual license:

- **Free** for individuals, non-profits, and educational institutions — [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **Commercial license** required for for-profit organizations — contact [sign@sign.mt](mailto:sign@sign.mt) for details

See [LICENSE.md](LICENSE.md) for the full license text.
