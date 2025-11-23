import MainConfig from "../src/configs/global.json"

export class GlobalManagment {

    /**
     *  return theme color (light or dark)
     * @returns String
     */
    static getColorTheme (){
        const exist_theme = localStorage.getItem("theme")
        return (exist_theme&&(exist_theme=="light"||exist_theme=="dark"))?exist_theme:"dark"
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


}