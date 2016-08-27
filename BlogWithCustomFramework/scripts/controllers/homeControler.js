class HomeController{
    constructor(homeView, requester, baseUrl, appKey){
        this._homeview = homeView;
        this._requester = requester;
        this._appKey = appKey;
        this._BaseServiceUrl = baseUrl;//TODO
        
    }

    showGuestPage(){
        this._homeview.showGuestPage();
    }
}