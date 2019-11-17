import * as StyleThings from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

const {
    default: styled,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = StyleThings as ThemedStyledComponentsModule<ITheme>;

export { createGlobalStyle, keyframes, ThemeProvider };
export default styled;