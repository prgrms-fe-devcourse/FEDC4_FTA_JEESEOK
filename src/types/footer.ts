import React from 'react';

export interface FooterProps {
  content: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
