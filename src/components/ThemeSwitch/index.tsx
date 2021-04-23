import { Icon } from 'components/icons/Icon';
import { useTheme } from 'utils/hooks/useTheme';
import React from 'react';
import { SwitchTheme } from './styles';

interface IThemeSwitchProps {
	lightColor?: string;
	darkColor?: string;
}

const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ lightColor, darkColor, ...props }) => {
	const { switchTheme, theme } = useTheme();

	const icon = theme.title === 'light' ? <Icon name='dark' /> : <Icon name='light' />;

	return (
		<SwitchTheme
			{...props}
			lightColor={lightColor}
			darkColor={darkColor}
			onClick={() => switchTheme()}
		>
			{icon}
		</SwitchTheme>
	);
};

export { ThemeSwitch };
