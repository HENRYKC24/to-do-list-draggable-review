const localStorage = {
  store: [],
  getFromStorage() {
    return this.store;
  },
  storeLocally(tasks) {
    this.store = tasks;
    return true;
  }
}



export {localStorage};