export const breakpoints = {
  small: 768,
  medium: 1024,
  large: 1366,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
