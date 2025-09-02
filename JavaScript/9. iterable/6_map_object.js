/**
 * Map : key, value 한 쌍으로 저장
 * - set(key, value) : 데이터 추가
 * - get(key) : 데이터 조회
 * - has(key) : 데이터 존재 확인
 * - delete(key) : 데이터 삭제
 */

let fruitMap = new Map();
fruitMap.set('apple', '🍎');
fruitMap.set('orange', '🍊');

console.log(fruitMap);
console.log(fruitMap.get('apple'));
console.log(fruitMap.has('orange'));
console.log(fruitMap.has('lemon'));
console.log(fruitMap.delete('apple'));
console.log(fruitMap);

fruitMap.set('apple', '🍎');
fruitMap.set('orange', '🍊');
console.log(fruitMap);
