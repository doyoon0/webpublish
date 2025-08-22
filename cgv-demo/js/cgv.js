class Member {
    #id;
    #pwd;

    constructor(id, pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }
    getId = () => this.#id;
    getPwd = () => this.#pwd;

    display = () => console.log(this.getId(), this.getPwd())
}

class JoinMember extends Member {
    constructor(id, pwd, name, phone, emailname, emaildomain) {
        super(id, pwd);
        this.name = name;
        this.phone = phone;
        this.emailname = emailname;
        this.emaildomain = emaildomain;
    }

    display = () => console.log(
        this.getId(),
        this.getPwd(),
        this.name,
        this.phone,
        this.emailname,
        this.emaildomain
    );
}

//Login
function loginCheck(){
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');

    if(id.value === '') {
        alert('아이디를 입력해주세요.');
    } else if(pwd.value === '') {
        alert('패스워드를 입력해주세요.');
    } else {
        member = new Member(id.value, pwd.value);
        member.display();
    }
}

class UserLogin {
    constructor(id, pwd) {
        this.id = id;
        this.pwd = pwd;
    }

    getId = () => this.id;
    getPwd = () => this.pwd;

    display = () => console.log(this.getId(), this.getPwd());
}

//Join
function signupCheck() {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let cpwd = document.querySelector('#cpwd');
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let emailname = document.querySelector('#emailname');
    let emaildomain = document.querySelector('#emaildomain');


    if(id.value === '') {
        alert('아이디를 입력해주세요');
        id.focus();
    } else if (pwd.value === '') {
        alert('패스워드를 입력해주세요');
        pwd.focus();
    } else if (cpwd.value === '') {
        alert('패스워드 확인을 입력해주세요');
        cpwd.focus();
    } else if (name.value === '') {
        alert('이름을 입력해주세요');
        name.focus();
    } else if (phone.value === '') {
        alert('폰번호를 입력해주세요');
        phone.focus();
    } else if (emailname.value === '') {
        alert('이메일 주소를 입력해주세요');
        emailname.focus();
    } else if (emaildomain.value === '') {
        alert('이메일 도메인을 입력해주세요');
        emaildomain.focus();
    } else {
        //서버 전송
        member = new JoinMember(id.value, 
                                pwd.value, 
                                name.value, 
                                phone.value, 
                                emailname.value, 
                                emaildomain.value);

        member.display();
        // console.log(id.value, pwd.value, cpwd.value, name.value, phone.value, emailname.value, emaildomain.value);
    }
}