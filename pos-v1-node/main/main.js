const database = require("../main/datbase");

module.exports = {
    calculateCount,
    makeReceipt,
    makeReceiptSum,
    buildSingleItem,
    printInventory
};

function calculateCount(tags) {
    let countArray = [];
    let Count = {};
    for (let i = 0; i < tags.length;) {
        let count = 0;
        for (let j = i; j < tags.length; j++) {
            let specialCount = tags[i].split("-");
            if (tags[i] === tags[j]) {
                if (specialCount.length === 2) {
                    Count = {barcode: specialCount[0], count: parseFloat(specialCount[1])};
                }
                else {
                    Count = {barcode: tags[i], count: count + 1};
                }
                count++;
            }
        }
        countArray.push(Count);
        i += count;
    }
    for (let i = 0; i < countArray.length;) {
        let num = 0;
        for (let j = i; j < countArray.length; j++) {
            if (countArray[i].barcode === countArray[j].barcode) {
                num++;
            }
            if (num > 1) {
                countArray[i].count += countArray[j].count;
                countArray.pop(countArray[j]);
            }
        }
        i += num;
    }
    return countArray;
}

function makeReceipt(countArray) {
    let receipt = database.loadAllItems();
    let receiptCountSum = [];
    for (let i = 0; i < receipt.length; i++) {
        for (let j = 0; j < countArray.length; j++) {
            if (countArray[j].barcode === receipt[i].barcode) {
                receiptCountSum.push({
                    barcode: receipt[i].barcode,
                    name: receipt[i].name,
                    unit: receipt[i].unit,
                    price: receipt[i].price,
                    count: countArray[j].count,
                    sum: countArray[j].count * receipt[i].price
                })
            }
        }
    }
    return receiptCountSum;
}
function makeReceiptSum(receiptCountSum) {
    let loadPromotion = database.loadPromotions();
    let loadPromotionArray = [];
    loadPromotionArray = loadPromotion[0].barcodes;
    let receiptSave = [];
    receiptSave = receiptCountSum;
    for (let i = 0; i < receiptCountSum.length; i++) {
        for (let j = 0; j < loadPromotionArray.length; j++) {
            if (loadPromotionArray[j] === receiptCountSum[i].barcode) {
                receiptSave.splice(i, 1, {
                    barcode: receiptCountSum[i].barcode,
                    name: receiptCountSum[i].name,
                    unit: receiptCountSum[i].unit,
                    price: receiptCountSum[i].price,
                    count: receiptCountSum[i].count,
                    sum: receiptCountSum[i].sum - parseInt(receiptCountSum[i].count / 3) * receiptCountSum[i].price
                })
            }
        }
    }
    return receiptSave;
}
function buildSingleItem(receiptSave) {
    return `名称：${receiptSave.name}，数量：${receiptSave.count}${receiptSave.unit}，单价：${receiptSave.price.toFixed(2)}(元)，小计：${receiptSave.sum.toFixed(2)}(元)`;
}

function printInventory(tags) {
    let countArray = calculateCount(tags);
    let receiptCountSum = makeReceipt(countArray);
    let receiptSave = makeReceiptSum(receiptCountSum);
    let s = "";//存放购物单
    let sale = "";//存放打折商品购物单
    let total = 0;
    let total1 = 0;//没有节省的钱
    let save = 0;
    for (let i = 0; i < receiptSave.length; i++) {
        if (i !== receiptSave.length - 1) {
            s += buildSingleItem(receiptSave[i]) + '\n';
        } else {
            s += buildSingleItem(receiptSave[i]);
        }

        total += receiptSave[i].sum;
        total1 += receiptSave[i].count * receiptSave[i].price;
    }
    for (let i = 0; i < receiptSave.length; i++) {
        if (receiptSave[i].count * receiptSave[i].price > receiptSave[i].sum) {
            let count = (receiptSave[i].count * receiptSave[i].price - receiptSave[i].sum) / receiptSave[i].price;
            sale += '名称：' + receiptSave[i].name + '，数量：' + count + receiptSave[i].unit + '\n';
        }
    }
    save = total1 - total;
    console.log(`***<没钱赚商店>购物清单***
${s}
----------------------
挥泪赠送商品：
${sale}----------------------
总计：${total.toFixed(2)}(元)
节省：${save.toFixed(2)}(元)
**********************`);
}