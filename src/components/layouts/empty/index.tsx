import React, { ReactNode } from 'react';

interface IEmptyLayoutProps {
	children: ReactNode;
}

const EmptyLayout: React.FC<IEmptyLayoutProps> = ({ children }) => {
	return <>{children}</>;
};

export default EmptyLayout;
