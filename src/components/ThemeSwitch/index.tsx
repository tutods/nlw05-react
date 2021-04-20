import Icon from 'components/icons/Icon';
import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { SwitchTheme } from './styles';

interface IThemeSwitchProps {
	lightColor?: string;
	darkColor?: string;
	className?: string;
}

const ThemeSwitch: React.FC<IThemeSwitchProps> = ({
	lightColor,
	darkColor,
	className,
	...props
}) => {
	const { switchTheme, theme } = useTheme();

	const icon = theme.title === 'light' ? <Icon name='dark' /> : <Icon name='light' />;

	return (
		<SwitchTheme
			className={className || ''}
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
