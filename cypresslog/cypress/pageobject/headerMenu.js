import { webLocators } from '../webLocators'
import wrapperMethods from '../utility/wrapperMethods'

const wrapper = new wrapperMethods()

export class headerMenu {

    // New Route Button
    static clickNewRouteButton() {         
        wrapper.onClickButton(webLocators._newRouteButton)       
    }

    // Open Saved Route
    static clickOpenSavedRouteButton() {       
        wrapper.onClickButton(webLocators._openSavedRouteButton)        
    }

    // Delete All Routes
    static clickDeleteAllRoutesButton() {      
        wrapper.onClickButton(webLocators._deleteAllRoutesButton)        
    }

    // Default Options
    static clickDefaultOptionButton() {         
        wrapper.onClickButton(webLocators._defaultOptionButton)
    }

    // Application Settings
    static clickApplicationSettingsMenu() {         
        wrapper.onClickButton(webLocators._applicationSettingsButton)        
    }

    // Map Layers
    static clickMapLayersMenu() {         
        wrapper.onClickButton(webLocators._mapLayersMenu)        
    }

    // Route Modifiers
    static clickRouteModifiersMenu() {       
        wrapper.onClickButton(webLocators._routeModifiersMenu)        
    }

    // Map Style
    static clickMapStyleMenu() {       
        wrapper.onClickButton(webLocators._mapStyleMenu)       
    }

}
 