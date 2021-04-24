import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = context.renderPage;

		try {
			context.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(context);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					{/* Google Fonts */}
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lexend:wght@500;600&display=swap'
						rel='stylesheet'
					/>

					{/* Favicon */}
					<link rel='icon' href='/favicon.svg' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
