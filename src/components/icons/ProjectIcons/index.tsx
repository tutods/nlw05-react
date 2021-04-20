import React from 'react';

const ProjectIcons: React.FC = () => {
	return (
		<svg
			preserveAspectRatio='xMidYMid meet'
			focusable='false'
			visibility='hidden'
			style={{
				visibility: 'hidden',
				position: 'absolute',
				pointerEvents: 'none'
			}}
		>
			{/* Light Mode */}
			<symbol id='light' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z' />
			</symbol>

			{/* Dark Mode */}
			<symbol id='dark' color='currentColor' viewBox='0 0 24 24'>
				<path d='M19 6.734c0 4.672-4.25 7.079-4.25 12.266h-5.5c0-5.187-4.25-7.594-4.25-12.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4.75 13.266h-4.5c-.276 0-.5.224-.5.5s.224.5.5.5h4.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-5l1.451 1.659c.19.216.464.341.753.341h.593c.288 0 .563-.125.752-.341l1.451-1.659z' />
			</symbol>

			{/* Pause */}
			<symbol id='pause' viewBox='0 0 11 19' fill='none'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M1.5 0C0.671573 0 0 0.671573 0 1.5V17.5C0 18.3284 0.671573 19 1.5 19C2.32843 19 3 18.3284 3 17.5V1.5C3 0.671573 2.32843 0 1.5 0ZM9.5 0C8.67157 0 8 0.671573 8 1.5V17.5C8 18.3284 8.67157 19 9.5 19C10.3284 19 11 18.3284 11 17.5V1.5C11 0.671573 10.3284 0 9.5 0Z'
					fill='currentColor'
				/>
			</symbol>

			{/* Repeat */}
			<symbol id='repeat' viewBox='0 0 24 24' fill='none'>
				<path
					d='M14 4.00024L16 6.00524L8.849 5.98424C5.632 5.98424 3 8.62324 3 11.8482V11.8482C3 13.4612 3.658 14.9272 4.718 15.9892'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 20.0002L8 17.9952L15.151 18.0162C18.368 18.0162 21 15.3772 21 12.1522V12.1522C21 10.5392 20.342 9.07323 19.282 8.01123'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</symbol>

			{/* Playing */}
			<symbol id='playing' viewBox='0 0 32 32' fill='none'>
				<path
					d='M20.7081 19.0347H19.6241C19.3268 19.0347 19.0548 19.2027 18.9228 19.468L17.9214 21.4707C17.7774 21.76 17.3641 21.76 17.2201 21.4707L14.7708 16.5707C14.6281 16.2867 14.2254 16.28 14.0748 16.56L12.9601 18.6227C12.8228 18.876 12.5574 19.0347 12.2694 19.0347H11.2921'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.55874 16H5.33474C3.62541 16 2.35741 17.5867 2.73341 19.2533L3.63608 23.2533C3.91074 24.4693 4.99074 25.3333 6.23741 25.3333H7.83208C8.26008 25.3333 8.57608 24.9373 8.48274 24.52L6.76008 16.892C5.42274 10.968 9.92674 5.33333 16.0001 5.33333V5.33333V5.33333C22.0734 5.33333 26.5774 10.968 25.2401 16.892L23.5187 24.52C23.4241 24.9373 23.7414 25.3333 24.1681 25.3333H25.7627C27.0094 25.3333 28.0894 24.4693 28.3641 23.2533L29.2667 19.2533C29.6427 17.5867 28.3747 16 26.6654 16H25.4414'
					stroke='#04D361'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</symbol>

			{/* Play */}
			<symbol id='play' viewBox='0 0 32 32' fill='none'>
				<path
					d='M12.2035 7.6447C11.5378 7.22106 10.6666 7.69927 10.6666 8.48836V23.5117C10.6666 24.3008 11.5378 24.779 12.2035 24.3553L24.0075 16.8437C24.625 16.4507 24.625 15.5493 24.0075 15.1564L12.2035 7.6447Z'
					fill='currentColor'
				/>
			</symbol>

			{/* Play Previous */}
			<symbol id='previous' viewBox='0 0 24 24' fill='none'>
				<path
					d='M17.4759 19.0623C18.1422 19.4724 19 18.993 19 18.2107L19 5.78981C19 5.00749 18.1422 4.52814 17.4759 4.93815L6 12.0002L17.4759 19.0623Z'
					fill='currentColor'
				/>
				<rect
					x='7'
					y='20.0002'
					width='2'
					height='16'
					rx='1'
					transform='rotate(180 7 20.0002)'
					fill='currentColor'
				/>
			</symbol>

			{/* Next */}
			<symbol id='next' viewBox='0 0 24 24' fill='none'>
				<path
					d='M6.5241 4.93815C5.85783 4.52814 5 5.00749 5 5.78981V18.2107C5 18.993 5.85783 19.4724 6.5241 19.0623L16.6161 12.8519C17.2506 12.4614 17.2506 11.5391 16.6161 11.1486L6.5241 4.93815Z'
					fill='currentColor'
				/>
				<rect x='17' y='4.00024' width='2' height='16' rx='1' fill='currentColor' />
			</symbol>

			{/* Shuffle */}
			<symbol id='shuffle' viewBox='0 0 24 24'>
				<path
					d='M3 17.9793L5.384 17.9913C6.393 17.9963 7.336 17.4943 7.896 16.6553L14.105 7.34126C14.663 6.50326 15.605 6.00226 16.612 6.00526L21 6.02126'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M19 19.9792L21 17.9792L19 15.9792'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8.893 8.62522L7.904 7.25322C7.337 6.46722 6.425 6.00322 5.455 6.00822L3 6.02122'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.969 15.3752L14.095 16.8312C14.665 17.5682 15.546 17.9982 16.478 17.9952L21 17.9792'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M19 8.02124L21 6.02124L19 4.02124'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</symbol>

			{/* Arrow Left */}
			<symbol id='arrow_left' viewBox='0 0 10 16' fill='none'>
				<path
					d='M8.33325 1.33334L1.66659 8.00001L8.33325 14.6667'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</symbol>
		</svg>
	);
};

export default ProjectIcons;
