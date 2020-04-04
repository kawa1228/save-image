const rp = require('request-promise');
const fs = require('fs');
import { CSV } from './csv.js';

const filename = 'src/data.csv';
// 先頭行をキー名にする
const options = { columns: true };

const csv = new CSV(filename, options);
const list = csv.getData();

try {
    for (let item of list) {
        const file = fs.createWriteStream(`src/image/${item.name}.jpg`);
        rp(item.url).pipe(file); // 書き込み
    }
} catch(error) {
    console.log('😫  読み込みエラー：', error);
} finally {
    console.log("🧚🏻  Done !✨")
}
