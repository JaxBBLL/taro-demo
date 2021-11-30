import { useContext } from 'react';
import { context } from './context';

export function useConnect() {
  return useContext(context);
}
