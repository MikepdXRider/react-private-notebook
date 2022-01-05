const mockUserService = {
  getUser: jest.fn(),
  getSession: jest.fn(),
  signUpUser: jest.fn(),
  signInUser: jest.fn(),
  signOutUser: jest.fn(),
};

export default mockUserService;
