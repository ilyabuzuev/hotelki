export class Category {
  private readonly _id: string;
  private readonly _label: string;
  private readonly _value: string;

  constructor(params: { id: string; label: string; value: string }) {
    this._id = params.id;
    this._label = params.label;
    this._value = params.value;
  }

  get value(): string | undefined {
    if (!this.validate()) return;
    return this._value;
  }

  public validate(): boolean {
    if (!this._value) return false;
    return true;
  }
}
