import { useEffect } from 'react';
import Script from 'next/script';

function CustomSubstackEmbed() {
	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		window.CustomSubstackWidget = {
	// 			substackUrl: 'kodadot.substack.com',
	// 			placeholder: 'jane.doe@kodadot.xyz',
	// 			theme: 'custom',
	// 			colors: {
	// 				primary: '#FF7AC3',
	// 				input: '#FFFFFF',
	// 				email: '#000000',
	// 				text: '#000000',
	// 			},
	// 		};
	// 	}
	// }, []);

	return (
		<div>
			{' '}
			<div id="custom-substack-embed" />
			{/* Load substack form */}
			<Script id="rendered-component">
				{`window.CustomSubstackWidget = {
            substackUrl: "ordinalsacademy.substack.com",
            placeholder: "ordinals@gmail.com",
            buttonText: "Subscribe",
            theme: "custom",
            colors: {
              primary: "rgb(20, 21, 26)",
              input: "rgb(236, 239, 240)",
              email: "rgb(43, 47, 54)",
              text: "#fff",
            }
          };
          `}
			</Script>
			<Script
				src="https://substackapi.com/widget.js"
				async
				id="render-component"
			/>
		</div>
	);
}

export default CustomSubstackEmbed;
