const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('find by email', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    const email = "santiago@generation.org"; 
    
    const foundUser = userController.findByEmail(email);

    expect(foundUser).toEqual(user);
  });

test('find by email', () => {
    let user = new User(2234,"Fernando", "fernando@generation.org");
    userController.add(user);
    const email = "fernando@generation.org"; 
    
    const foundUser = userController.findByEmail(email);

    expect(foundUser).toEqual(user);
  });


test('find by ID', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    const id = 1234; 
    
    const foundUser = userController.findById(id);

    expect(foundUser).toEqual(user);
  });

test('find by ID', () => {
    let user = new User(666,"Fernando", "fernando@generation.org");
    userController.add(user);
    const id = 666; 
    
    const foundUser = userController.findById(id);

    expect(foundUser).toEqual(user);
  });