// lib/utils.ts

export function filterSalesByYear(data: any[], year: number) {
  return data.filter((item) => item.year === year);
}
