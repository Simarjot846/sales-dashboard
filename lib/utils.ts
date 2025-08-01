export const filterSalesByYear = (data: any[], year: number) => {
  return data.filter((entry) => entry.year === year);
};
