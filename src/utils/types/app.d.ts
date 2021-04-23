import { AppProps } from 'next/app';

export type AppCustomProps = AppProps & {
	Component: Page;
};
