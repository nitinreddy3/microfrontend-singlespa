import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

// singleSpa.registerApplication('app-navigation', () => SystemJS.import('app-navigation'), () => true);
singleSpa.registerApplication('profile', () => SystemJS.import('profile'), pathPrefix('/profile'));
singleSpa.registerApplication('app-details', () => SystemJS.import('app-details'), pathPrefix('/app-details'));
// setTimeout(() => {
// }, 500);
function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}

singleSpa.start()
