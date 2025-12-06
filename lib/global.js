import MainConfig from "../src/configs/global.json"

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
      

}