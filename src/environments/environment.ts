// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCbYBd3Gu_fExn3_buzlP_Q4Yxu8U8Tz7U',
    authDomain: 'madbrothers-auth.firebaseapp.com',
    databaseURL: 'https://madbrothers-auth.firebaseio.com',
    projectId: 'madbrothers-auth',
    storageBucket: 'madbrothers-auth.appspot.com',
    messagingSenderId: '574391449346'
  }
};
