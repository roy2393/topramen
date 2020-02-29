import {StyleSheet} from 'react-native';
import Colors from 'mys-common/services/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    borderColor: Colors.defaultInputBorder,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  textLink: {color: Colors.textLink},
  textTitle: {color: Colors.textPrimary},
  btnContainer: {padding: 5, margin: 10},
  btnLightBlue: {backgroundColor: 'cornflowerblue'},
  btnOrange: {backgroundColor: 'orange'},
  btnDisabled: {opacity: 0.6},
  textWhite: {color: Colors.textWhite},
  textBlack: {color: Colors.textBlack},
  textBold: {fontWeight: '700'},
  textUnderline: {textDecorationLine: 'underline'},
  textXl: {fontSize: 28},
  textLg: {fontSize: 18},
  textLg2: {fontSize: 24},
  textMd2: {fontSize: 16},
  textMd: {fontSize: 12},
  textSm: {fontSize: 9},
  textXs: {fontSize: 8},
  balanceBadge: {
    fontSize: 12,
    padding: 2,
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center',
  },

  defaultBackground: {
    backgroundColor: Colors.bgDefault,
  },
  positiveBalanceBadge: {
    color: Colors.positiveBalanceBg,
  },
  negativeBalanceBadge: {
    color: Colors.negativeBalanceBg,
  },
  zeroBalanceBadge: {
    color: Colors.zeroBalanceBg,
  },
});

export default styles;
