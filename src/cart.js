export default {
  items: [],
  total: 0,
  specsMap: {},
  foodsMap: {},
  find(id) {
    let target;
    this.items.forEach((item) => {
      if (item.id === id) target = item;
    });
    return target;
  },
  update() {
    let total = 0;
    this.items.forEach((item) => {
      let { spec, count } = item;
      total += spec.price * count;
    });
    this.total = total.toFixed(1);
  },
  add(id) {
    console.log(id);
    const spec = this.specsMap[id];
    let item = this.find(id);
    if (item) {
      item.count++;
    } else {
      item = {
        id,
        count: 1,
        spec
      };
      this.items.push(item);
    }
    const food = this.foodsMap[spec.parent];
    food.count = spec.count = item.count;
    this.update();
  },
  increase(id) {
    const item = this.find(id);
    if (item) {
      item.count++;
    }
    const spec = this.specsMap[id];
    const food = this.foodsMap[spec.parent];
    if (spec) food.count = spec.count = item.count;
    this.update();
  },
  decrease(id) {
    const item = this.find(id);
    if (item) {
      item.count--;
    }
    if (item.count <= 0) {
      this.items.splice(this.items.indexOf(item), 1);
    }
    const spec = this.specsMap[id];
    const food = this.foodsMap[spec.parent];
    if (spec) food.count = spec.count = item.count;
    this.update();
  },
  clear() {
    this.items.splice(0, this.items.length);
    this.update();
  }
};
