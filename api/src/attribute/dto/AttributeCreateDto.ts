export enum AttributeType {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  TEXT = 'TEXT',
}

export interface AttributeCreateDto {
  name: string;
  type: AttributeType;
}
