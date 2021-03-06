class HomeController{
    constructor(homeView, requester, baseUrl, appKey){
        this._homeView = homeView;
        this.requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appKey + "/posts";

    }

    showGuestPage(){
        let _that = this;

        let recentPosts = [];

        let requestUrl = this._baseServiceUrl + "/appdata/" + this._appId + "/posts";

        this.requester.get(requestUrl,
            function success(data){

                let currentId = 1;

                data.sort(function (elem1,elem2){
                    let date1 = new Date(elem1._kmd.ect);
                    let date2 = new Date(elem2._kmd.ect);
                    return date2-date1;
                })

                for(let i=0; i<data.length && i<5; i++){
                    data[i].postId = currentId;
                    currentId++;
                    recentPosts.push(data);
                }

                _that._homeView.showGuestPage(recentPosts,data);
            },
            function error(data){
                showPopup('error','Error collecting the data.')
            })

    }

    showUserPage(){
        this._homeView.showUserPage();
    }
}
