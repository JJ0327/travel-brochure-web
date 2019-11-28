import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

const PageTemplate = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
};

export default PageTemplate;
