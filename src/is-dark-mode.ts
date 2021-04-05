export const isDarkMode = (): boolean => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
