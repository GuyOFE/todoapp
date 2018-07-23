export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  priority: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

let todo = new Todo({
  title: 'Learn angular',
  complete: false
});