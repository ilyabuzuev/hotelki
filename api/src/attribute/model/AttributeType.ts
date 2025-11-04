const AttributeType = {
    String: 'String',
    Number: 'Number',
    Price: 'Price',
} as const;

export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];