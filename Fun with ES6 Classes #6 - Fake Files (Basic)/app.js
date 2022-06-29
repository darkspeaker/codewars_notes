class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this._counter = (this._counter || 0) + 1;
    this._counterWord = (this._counterWord || 0) + 1;
  }
  get fullName() {
    return this._fullName;
  }
  get filename() {
    return this._fullName
      .split(".")
      .filter((i) => i !== this.extension)
      .join(".");
  }
  get extension() {
    return this._fullName.split(".").pop();
  }
  getContents() {
    return this.contents;
  }
  write(str) {
    let breakLine = "\n";
    this.contents.trim().length === 0
      ? (this.contents = str)
      : (this.contents += breakLine + str);
    return this.contents;
  }
  gets() {
    let arrContent = this.contents.split("\n");
    this._counter = (this._counter || 0) + 1;
    return arrContent[this._counter - 2];
  }
  getc() {
    this._counterWord = (this._counterWord || 0) + 1;
    return this.contents.split("")[this._counterWord - 2];
  }
}
