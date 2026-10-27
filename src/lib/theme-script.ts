/**
 * Runs before first paint (inlined in <head>) so there is no flash of the wrong theme.
 * Dark is the default; a saved choice wins. It also marks the page as JS-enabled
 * so scroll-reveal animations only hide content when they can actually reveal it.
 */
export const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');d.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){}d.classList.add('js')})();`;
