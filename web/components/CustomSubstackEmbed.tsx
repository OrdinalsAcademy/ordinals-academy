import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

function CustomSubstackEmbed() {
	const { t } = useTranslation('common');
	useEffect(() => {
		// Define the settings for the widget
		window.CustomSubstackWidget = {
			substackUrl: 'ordinalsacademy.substack.com',
			placeholder: 'ordinals@gmail.com',
			buttonText: t('Subscribe'),
			theme: 'custom',
			colors: {
				primary: 'rgb(20, 21, 26)',
				input: 'rgb(236, 239, 240)',
				email: 'rgb(43, 47, 54)',
				text: '#fff',
			},
		};

		// Create a new script element and set its properties
		const script = document.createElement('script');
		script.src = 'https://substackapi.com/widget.js';
		script.async = true;
		script.id = 'render-component';

		// Append the script element to the document's body
		document.body.appendChild(script);

		// Cleanup logic: remove the script from the body when the component is unmounted
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return <div id="custom-substack-embed" />;
}

export default CustomSubstackEmbed;
