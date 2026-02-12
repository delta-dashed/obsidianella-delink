# Obsidianella Delink

Copy your Obsidian notes with clean, portable formatting. Links become plain text, escape characters disappear, and your content is ready to paste anywhere.

## What it does

| Before | After |
|--------|-------|
| `[[Meeting Notes\|yesterday's meeting]]` | `yesterday's meeting` |
| `[[Project Ideas]]` | `Project Ideas` |
| `[click here](https://example.com)` | `click here` |
| `-\_-` | `-_-` |

## Installation

### Using BRAT (recommended)

1. Install the [BRAT plugin](https://github.com/TfTHacker/obsidian42-brat) from Community Plugins
2. Open BRAT settings
3. Click **Add Beta Plugin**
4. Enter: `delta-dashed/obsidianella-delink`
5. Enable the plugin in Community Plugins

### Manual installation

1. Download `main.js` and `manifest.json` from the [latest release](https://github.com/delta-dashed/obsidianella-delink/releases/latest)
2. Create folder: `<your-vault>/.obsidian/plugins/obsidianella-delink/`
3. Copy both files into that folder
4. Enable the plugin in Settings → Community Plugins

## Usage

**Click the copy icon** in the left sidebar ribbon, or use the command palette:

`Ctrl/Cmd + P` → "Copy current note with links removed"

Your cleaned note is now in your clipboard, ready to paste.
