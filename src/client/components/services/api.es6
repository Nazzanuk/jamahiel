'use strict';

app.factory('API', function ($rootScope, $http) {

    var API_URL = "/api/";

    var login = (object) => {
        return $http.get(API_URL + "login/", {params : object}).then((response) => {
            console.log(response.data);
            return response.data;
        });
    };

    var getPosts = (object) => {
        return $http.get(API_URL + "posts/", {params : object}).then((response) => {
            console.log(response.data);
            return _.map(response.data, (post) => { return post.replace(/.json/g, '') });
        });
    };

    var getPostById = (id) => {
        return $http.get(`${API_URL}posts/id/${id}`, {}).then((response) => {
            console.log(response.data);
            return response.data;
        });
    };

    return {
        login: login,
        getPosts: getPosts,
        getPostById: getPostById
    }
});