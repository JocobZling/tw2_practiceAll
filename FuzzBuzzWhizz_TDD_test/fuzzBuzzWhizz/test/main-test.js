'use strict';
//describe 标示在网页上
describe('fuzbuzzwhizz', () => {

   /*   it('when there is no rules,should print', () => {
        let result = "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100";
        expect(fuzbuzzwhizz(3, 5, 7)).toEqual(result);
    });*/
    it('when there is the first rules that three special number,should print fizz', () => {
        let num = 3;
        let result = 'fizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the first rules that three special number,should print buzz', () => {
        let num = 5;
        let result = 'buzz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the first rules that three special number,should print whizz', () => {
        let num = 7;
        let result = 'whizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the third rules that the number reported is a multiple of ' +
        'the first particular number,should print fizz', () => {
        let num = 9;
        let result = 'fizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the third rules that the number reported is a multiple of ' +
        'the second particular number,should print buzz',() => {
        let num =10;
        let result='buzz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the third rules that the number reported is a multiple of ' +
        'the third particular number,should print whizz',() => {
        let num =14;
        let result='whizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the fourth rules that if the reported number is a multiple of ' +
        'two special numbers such as first and second particular number,should print fizz buzz',() => {
        let num =15;
        let result='fizz buzz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the fourth rules that if the reported number is a multiple of ' +
        'two special numbers such as first and third particular number,should print fizz whizz',() => {
        let num =21;
        let result='fizz whizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the fourth rules that if the reported number is a multiple of ' +
        'two special numbers such as second and third particular number,should print buzz whizz',() => {
        let num =70;
        let result='buzz whizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the fourth rules that if the reported number is a multiple of ' +
        'three special numbers,should print fizz buzz whizz',() => {
        let num =105;
        let result='fizz buzz whizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });
    it('when there is the fifth rules that if the reported number contains the first ' +
        'special number,should print fizz',() => {
        let num =35;
        let result='fizz';
        expect(mapNumberToWord(num)).toEqual(result);
    });

});
