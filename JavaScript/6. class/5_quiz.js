/**
 * 학생(Student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */
let dataList = [
    {name: '홍길동', age: 20, address: '서울시', emoji: '👩' },
    {name: '홍길일', age: 21, address: '대구시', emoji: '👩' },
    {name: '홍길이', age: 22, address: '대전시', emoji: '👱' },
    {name: '홍길삼', age: 23, address: '광주시', emoji: '👸' },
    {name: '홍길사', age: 24, address: '부산시', emoji: '👩' }
];

class Student {
    #name;
    #age;
    #address;

    constructor(name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    getName = () => this.#name;
    getAge = () => this.#age;
    getAddress = () => this.#address;
    getEmoji = () => this.emoji;

    setName = (name) => this.#name = name;
    setAge = (age) => this.#age = age;
    setAddress = (address) => this.#address = address;
    setEmoji = (emoji) => this.emoji = emoji;

    display = () => {
        console.log(this.#name, this.#age, this.#address, this.emoji);
    }

}

let hong = new Student('홍길동', 20, '서울시', '🧑');
hong.display();

//dataList의 학생정보를 이용하여 objectList를 생성
//objList에는 Student 클래스를 이용하여 객체 생성 주소가 저장
let objectList = [];
for (let i=0; i<dataList.length; i++) {
    let obj = dataList[i];
    objectList.push(new Student(obj.name, obj.age, obj.address, obj.emoji));
}

// console.log(objectList);
objectList.forEach(student => student.display());
