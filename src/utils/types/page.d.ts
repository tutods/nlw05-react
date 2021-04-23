import { NextPage } from 'next';
import { ComponentType, FC } from 'react';

export type Page<P = {}> = NextPage<P> & {
	layout?: ComponentType | FC | FC<T> | ComponentType<T>;
};
