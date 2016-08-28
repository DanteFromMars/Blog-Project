class HomeController{
    constructor(homeView, requester, baseUrl, appKey){
        this._homeview = homeView;
        this._requester = requester;
        this._appKey = appKey;
        this._BaseServiceUrl = baseUrl + "/appData/" + appKey + "/posts";
        
    }

    showGuestPage(){
        let _that = this;
        this.requester.get(this._BaseServiceUrl,
        function(response){
            showPopup('success','Successfully collected data.');
            that._homeview.showGuestPage(response);
        },
        function(data){
            showPopup('error','Error collecting the data.')
        })

    }

    showUserPage(){
        this._homeview.showUserPage();
    }
}
