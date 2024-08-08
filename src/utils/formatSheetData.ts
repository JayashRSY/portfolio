/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatSheetData = (data: any) => {
  const headers = data[0];
  return data.slice(1).map((row: any) => {
    const formattedRow: any = {};
    row.forEach((cell: any, index: number) => {
      formattedRow[headers[index]] = cell;
    });
    return formattedRow;
  });
}