import MainConfig from "../src/configs/global.json"
import Cookies from "js-cookie";


export class GlobalManagment {

    /**
     *  return theme color (light or dark)
     * @returns String
     */
    static getColorTheme (){
        const exist_theme = localStorage.getItem("theme")
        return (exist_theme&&(exist_theme=="light"||exist_theme=="dark"))?exist_theme:"light"
    }


    /**
     * set theme color
     * @param {string} new_theme 
     */
    static setColorTheme (new_theme){
        const newValue = new_theme=="light"||new_theme=="dark"?new_theme:"dark";
        localStorage.setItem(new_theme);

        return true;
    }


    static hexToRgba(hex, opacity = 1) {
        hex = hex.replace('#', '');
      
        // حالت کوتاه #f33 → #ff3333
        if (hex.length === 3) {
          hex = hex.split('').map(c => c + c).join('');
        }
      
        const bigint = parseInt(hex, 16);
      
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
      
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

    /**
     * create opacity color
     * @param {*} color 
     * @param {*} opacity 
     * @returns 
     */

    static applyOpacity(color, opacity = 0.3) {
        if (color.startsWith('#')) {
          // hex
          return this.hexToRgba(color, opacity);
        }
        if (color.startsWith('rgb')) {
          // rgb or rgba
          return color.replace(/[\d\.]+\)$/g, `${opacity})`);
        }
        // fallback: نام رنگ
        return color;
      }
      

      /**
       * fetch global config file from json
       */

      static GlobalConfig (){
        return MainConfig;
      }


      /**
       * get cookie
       */

      static GetCookie (key){
        if (this.IsCookieExist(key)){
          return Cookies.get(key);
        }

        return null;
      }

      static SetCookie (key, value, expireDays = 1, isSecure = true, cookie_path = "/"){
        // Set a cookie that expires in 7 days
        const date = new Date();
        date.setDate(date.getDate() + expireDays);
      
        Cookies.set(key, value, {expires:date, secure:isSecure, path:cookie_path});

        
        return (Cookies.get(key) && Cookies.get(key) == value)?true:false;
      }

      static IsCookieExist(key){
        return Cookies.get(key)?true:false;
      }

      static RemoveCookie(key){
        if (this.IsCookieExist(key)){
          Cookies.remove(key);
        }
      }

}