
import "styled-components"

// Extensão da interface DefaultTheme // 
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            whiteWithOpacity: string;
        };
    }
}
