import { Notice, Plugin } from "obsidian";

export default class ObsidianellaDelinkPlugin extends Plugin {
	async onload() {
		// Add ribbon icon (sidebar button)
		this.addRibbonIcon("copy", "Copy delinked note", async () => {
			await this.copyDelinkednote();
		});

		// Also add a command for keyboard shortcut access
		this.addCommand({
			id: "copy-delinked-note",
			name: "Copy current note with links removed",
			callback: async () => {
				await this.copyDelinkednote();
			},
		});
	}

	async copyDelinkednote() {
		const activeFile = this.app.workspace.getActiveFile();

		if (!activeFile) {
			new Notice("No active note to copy");
			return;
		}

		const content = await this.app.vault.read(activeFile);
		const delinkedContent = this.delink(content);

		await navigator.clipboard.writeText(delinkedContent);
		new Notice("Copied delinked note to clipboard");
	}

	delink(content: string): string {
		let result = content;

		// Handle wikilinks with aliases: [[page|alias]] → alias
		result = result.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2");

		// Handle wikilinks without aliases: [[page]] → page
		result = result.replace(/\[\[([^\]]+)\]\]/g, "$1");

		// Handle markdown links: [text](url) → text
		result = result.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

		// Remove Obsidian escape characters: \_ \* \# \[ \] \| \\ etc.
		result = result.replace(/\\([_*#\[\]|\\`~<>])/g, "$1");

		return result;
	}
}
