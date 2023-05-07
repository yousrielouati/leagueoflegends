// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiAllChampionsURL: "http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json",
  apiFreeChampionsURL: "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations",
  apiImages:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/",
  apiFreeChampionsKey: "RGAPI-a4642b33-3cdf-4ad5-bd91-9f2c5a732ed5",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
