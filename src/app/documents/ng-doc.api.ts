import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API References',

	scopes: [
		// Add the paths to the source code of your project, based on which you want to generate the API here
    {
      name: 'select',
      route: 'select-api',
      include: 'src/app/ngx-mat-select/public-api.ts',
    },

  ],
  order: 100
};

export default Api;
