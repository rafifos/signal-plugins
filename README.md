# Rafifos's personal SignalRGB plugins and components

[![built with love](https://forthebadge.com/images/featured/featured-built-with-love.svg)](https://forthebadge.com)

Personal Plugins and Components for [SignalRGB](https://signalrgb.com/).

## Overview

This repository contains custom plugins and components for SignalRGB, a software that allows users to control and synchronize RGB lighting across different devices.

### Current Plugins

- AdamantiuN_Akira.js - Support for the AdamantiuN Akira keyboard

### Current Components

- aigo_AR12_Pro.json - Component definition for the aigo AR12 Pro fan
- Montech_King_95.json - Component definition for the Montech King 95 Case

## Development

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version)
- [pNPm](https://pnpm.io) package manager

### Setup

1. Clone this repository:

```sh
git clone https://github.com/rafifos/signal-plugins.git
cd signal-plugins
```

2. Install dependencies:

```sh
pnpm install
```

### Linting

To lint the code:

```sh
pnpm lint
```

### Git Hooks

This project uses [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks:

- **pre-commit**: Automatically formats and checks files with Biome before committing
- **pre-push**: Runs Biome checks before pushing code

## Adding New Plugins/Components

Follow the SignalRGB documentation to create new plugins and components:

- [SignalRGB Plugin Documentation](https://docs.signalrgb.com/plugins)

## License

This project is licensed under the MIT License.

## Author

- [Rafael Julio](https://rafifos.dev) ([@rafifos](https://github.com/rafifos))
