const main = require('../main/main');
const database = require('../main/datbase');

describe('pos', function () {
    let allItems;
    var inputs;
    beforeEach(function () {
        allItems = database.loadAllItems();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });
    it('when I input item that I buy something ,it’ll print the count I buy', function () {
        let expectText = [{barcode: 'ITEM000001', count: 5},
            {barcode: 'ITEM000003', count: 2},
            {barcode: 'ITEM000005', count: 3}];
        expect(main.calculateCount(inputs)).toEqual(expectText);
    });

    it('when I input my shoppint count ,it will print my itemReceipt', function () {
        let input = [{barcode: 'ITEM000001', count: 5},
            {barcode: 'ITEM000003', count: 2},
            {barcode: 'ITEM000005', count: 3}];
        let expectText = [{
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3,
            count: 5,
            sum: 15
        },
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15,
                count: 2,
                sum: 30
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.5,
                count: 3,
                sum: 13.5
            }];
        expect(main.makeReceipt(input)).toEqual(expectText);
    });

    it('when I input my old item menu , it should print new item menu', function () {
        let input = [{
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3,
            count: 5,
            sum: 15
        },
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15,
                count: 2,
                sum: 30
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.5,
                count: 3,
                sum: 13.5
            }];
        let expectText = [{
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3,
            count: 5,
            sum: 12
        },
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15,
                count: 2,
                sum: 30
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.5,
                count: 3,
                sum: 9
            }]
        expect(main.makeReceiptSum(input)).toEqual(expectText);
    });
    it('when I input one item menu ,it should print the one receipt', function () {
        let input = {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15,
            count: 2,
            sum: 30
        };
        let expectText = `名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)`
        expect(main.buildSingleItem(input)).toEqual(expectText);
    });
    it('should print correct text', function () {

        spyOn(console, 'log');

        main.printInventory(inputs);

        let expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
