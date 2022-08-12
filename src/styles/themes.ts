import "styled-components";
import color from 'color';

const themes = {
  general: {
    grey: color("#6C6C6C"),
    black: color('#3C3C3C'),
  },

  toasts: {
    info: color("#F5A623"),
    success: color("#41B592"),
    error: color("#EB6957"),
  },
};

type Theme = typeof themes;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default themes;

