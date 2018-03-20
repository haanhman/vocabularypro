import platform from '../../../../native-base-theme/variables/platform';
import getTheme from '../../../../native-base-theme/components';

const customTheme = getTheme(platform);
const myTheme = {
  ...customTheme,
  "NativeBase.Text": {
    ...customTheme["NativeBase.Text"],
    ".checked": {
      color: "#0580ff",
      fontWeight: "bold"
    },
    color: "gray"
  }
}

export default myTheme
