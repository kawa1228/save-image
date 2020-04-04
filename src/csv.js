const fs = require('fs');
const parse = require('csv-parse/lib/sync');

export class CSV {
    constructor(filename, options) {
        this.filename = filename;
        this.options = options;
    }

    read() {
        return fs.readFileSync(this.filename).toString();
    }

    getData() {
        const content = this.read();
        return parse(content, this.options);
    }
}
