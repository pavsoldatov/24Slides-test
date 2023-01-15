export const getCoordsInPercent = (x: number, y: number) => {
  return {
    x: x * 100 + '%',
    y: y * 100 + '%',
  };
};
