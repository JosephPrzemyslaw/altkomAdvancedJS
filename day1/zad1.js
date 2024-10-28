
function getPhone(home) {
    const homePattern = /^\d{8}$/;
    const phone = {
        setHome(home) {
            if(!homePattern.test(home)){
                throw new Error('Not valid phone');
            }
            this.home = home
        },
    };
    phone.setHome(home);
    return phone;
}

function test(homeNo) {
    try {
        const obj = getPhone(homeNo);
        console.log("Object was created")
    } catch(err) {
        console.error(err.message);
    }
}

test("1234")
test("12345678");
test("12345678910111");
test("123AB678");

