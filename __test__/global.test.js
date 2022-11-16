const text = "hola mundo";
const cars = ["nisa", "ferrari", "chevrolet"]

//test string


test("it must have text", () => {
    expect(text).toMatch(/mundo/);
});

//test array


test("do we have a ferrari?", () => {
  expect(cars).toContain("ferrari");
});


//test numbers

test("is it bigger than", () => {
  expect(20).toBeGreaterThan(5);
});


// test boolean

test("true?", () => {
  expect(true).toBeTruthy();
});

//test callback

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test("test callback", () => {
    reverseString("hola", (str)=> {
        expect(str).toBe("aloh");
    });
});

//test promises

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error("error"))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test ("test promises", () => {
    return reverseString2("hola")
      .then(string => {
        expect(string).toBe("aloh");
      });
});

//testing async and await

test("test async", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

//before the tests

beforeEach(()=> console.log("before each test"));
beforeAll(() => console.log("before all the tests"));


//after teh tests

afterEach(() => console.log("after each test"));
afterAll(()=> console.log("after all the tests"))