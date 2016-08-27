(function () {

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_ry1f4cZL";
    let appSecret = "63cd059a5484464da24a9eb09419b524";
    let guestCredentials = "d903ce08-eacd-c350-45fa-30f41cf87dbd";

    let authService = new AuthorizationService(baseUrl, appKey,appSecret,guestCredentials);
    let requester = new Requester(authService);

    authService.initAuthorizationType("Kinvey");

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    let homeView = new HomeView(mainContentSelector,selector);
    let homeController = new HomeController(homeView);

    let userView = new UserView(mainContentSelector,selector);
    let userController = new UserControler(userView);

    let postView = new PostView(mainContentSelector,selector);
    let postController = new PostController(postView);

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController

    initEventServices();

    onRoute("#/", function () {
        if(authService.isLoggedIn()){
            homeController.showUserPage();
        }
        else{
            homeController.showGuestPage();
        }
    });

    onRoute("#/post-:id", function () {
        // Create a redirect to one of the recent posts...
    });

    onRoute("#/login", function () {
        // Show the login page...
    });

    onRoute("#/register", function () {
        // Show the register page...
    });

    onRoute("#/logout", function () {
        // Logout the current user...
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
    });

    run('#/');
})();
