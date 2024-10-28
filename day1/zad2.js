// wprowadź zmianę w taki sposób aby użytkownik nie mógł nadpisać pola `home`

function getPhone(home) {
    const homePattern = /^\d{8}$/;
    let homeNo;
    const phone = {
        setHome(home) {
            if(!homePattern.test(home)){
                throw new Error('Not valid phone');
            }
            homeNo = home;
        },
        getHome() {
            return homeNo;
        }
    };

    phone.setHome(home);
    return phone;
}

function test(homeNo) {
    try {
        let obj = getPhone(homeNo);
        console.log("Object was created");
        obj.homeNo = "Ala ma kota"; // nie wplywa na home !
        const myHomeNo = obj.getHome();
        console.log(obj.getHome());
    } catch(err) {
        console.error(err.message);
    }
}

test("1234")
test("12345678");
test("12345678910111");
test("123AB678");
