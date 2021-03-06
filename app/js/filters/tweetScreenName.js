'use strict';

var filtersModule = require('./_index.js');
/**
 * @ngInject
 */

filtersModule.filter('tweetScreenName', function() {
    
    return function(input) {
        if (!input) {
          return "";
        } else {
        	var  username = input
            .replace(/<span class="Emoji Emoji--forLinks".*?true">(.*?)<\/span>/g,"$1")
        	.replace(/<span class="Icon .*?small"/g," ")
	        return username;
        }
    };
});
