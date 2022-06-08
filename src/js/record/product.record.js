export default class ProductRecord {
  constructor(record) {
    this.id = record?.id;
    this.img = record?.img;
    this.name = record?.name;
    this.description = record?.description;
    this.price = record?.price;
    this.weight = record?.weight;
    this.quantity = record?.quantity;
  }

}
