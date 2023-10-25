declare global {
	interface Window {
		CustomSubstackWidget: {
			substackUrl: string;
			placeholder: string;
			buttonText: string;
			theme: string;
			colors: {
				primary: string;
				input: string;
				email: string;
				text: string;
			};
		};
	}
}

export {};
