export interface ITableSize {
  x: number;
  y: number;
}

export const getTableSize = (): ITableSize => ({
  x: 5,
  y: 5
});
