import React from 'react';
import ListProvider from './list';

const Hooks: React.FC = ({ children }) => (
  <ListProvider>{children}</ListProvider>
);

export default Hooks;
