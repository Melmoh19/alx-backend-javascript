class AppController {
  static getHomepage(request, response) {
    response.send(200, 'Hello ALX School!');
  }
}

export default AppController;
