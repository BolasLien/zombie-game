let records = [];
let storage = JSON.parse(localStorage.getItem("records"));

// 如果本地資料有成績就取出來
if (storage != null) {
    records = storage;
}

// 建立成績
const createRecord = (name, totalScore) => {
    let r = { name: '', totalScore: 0 };
    r.name = name;
    r.totalScore = totalScore;

    return r;
}

// 設定成績並儲存
const setRecords = (record) => {
    // 把成績放入清單中
    records.push(record)
    // 照分數排序(大到小)
    records = records.sort(function (a, b) {
        return a.totalScore > b.totalScore ? -1 : 1;
    });
    // 保留前10名
    records = records.slice(0, 10);

    localStorage.setItem("records", JSON.stringify(records));
}


