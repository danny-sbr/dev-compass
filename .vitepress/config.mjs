import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "doc",
	description: "doc description ",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
			{ text: "Library", link: "/library" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
			{
				text: "Library",
				items: [
					{ text: "Introduction", link: "/library" },
					{ text: "vConsole", link: "/library/vconsole" },
					{ text: "QRCode", link: "/library/qrcode" },
					{ text: "html2canvas", link: "/library/html2canvas" },
					{ text: "vee-validate", link: "/library/vee-validate" },
					{ text: "zod", link: "/library/zod" },
					{ text: "fullcalendar", link: "/library/fullcalendar" },
					{ text: "onScan", link: "/library/onscan" },
					{ text: "EChart", link: "/library/echart" },
					{ text: "Print.js", link: "/library/print-js" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
});
