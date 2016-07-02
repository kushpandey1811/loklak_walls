'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function centerOfAttractionLayout() {

  return {
    scope: {
    	data: '=',
    	cardbgcolor:'=',
    	cardtxtcolor:'=',
    },
    templateUrl: 'wall/templates/coa.html',
  };

}

directivesModule.directive('coa', centerOfAttractionLayout);