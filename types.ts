import React from 'react';

export interface Project {
  id: number;
  title: string;
  tech: string[];
  shortDescription: string;
  description: string;
  link: string | null;
  image: string;
  video: string;
}

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}