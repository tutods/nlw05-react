import { IEpisode } from 'interfaces/IEpisode';
import React from 'react';

interface IHomeProps {
	episodes: IEpisode[];
}

const Home: React.FC<IHomeProps> = ({ episodes }) => {
	// const [episodes, setEpisodes] = useState<IEpisode[]>();

	/**
	 * SPA
	 * useEffect(() => {
	 *	fetch('http://localhost:3333/episodes')
	 *		.then((response) => response.json())
	 *		.then((data) => setEpisodes(data));
	 *}, []);
	 */

	return (
		<div>
			{episodes?.map((episode, index) => (
				<div key={index}>{episode?.title}</div>
			))}
		</div>
	);
};

/**
 * SSR
 * export const getServerSideProps = async () => {
 *	const response = await fetch('http://localhost:3333/episodes');
 *	const data = await response.json();
 *
 *	return {
 *		props: {
 *			episodes: data
 *		}
 *	};
 * };
 * */

/**
 * SSG
 */
export const getStaticProps = async () => {
	const response = await fetch('http://localhost:3333/episodes');
	const data = await response.json();

	return {
		props: {
			episodes: data
		},
		revalidate: 60 * 60 * 8 // new request at 8 hours
	};
};

export default Home;
