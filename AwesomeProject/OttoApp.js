import React from "react"
import { ScrollView, StyleSheet, View, Text, Image, TouchableWithoutFeedback, Platform } from 'react-native';
const  buyerGuaranteeImage = require("./image/photo")
import { colors, typographies } from './configs';
const styles = StyleSheet.create({
  zeroContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  zeroStateTitleTextStyle: {
    color: colors.black_40,
    ...typographies.display1,
    fontSize: 25,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 14,
    lineHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  zeroStateTextStyle: {
    color: colors.black_40,
    ...typographies.body2,
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaTextStyle: {
    color: colors.purple,
    ...typographies.subheading,
    marginTop: 18,
    marginBottom: 18,
    justifyContent: 'center',
  },
  avatarStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  guaranteeContainer: {
    flexDirection: 'row',
    backgroundColor: colors.paleGray,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    top: (Platform.OS === 'android' ? 50 : -20),
    left: 0,
    right: 0,
  },
  guaranteeSubText: {
    color: colors.black_70,
    paddingRight: 30,
    ...typographies.footnote,
  },
});


const renderGuarantee = () =>
  <View style={styles.guaranteeContainer}>
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
      <Image
        source={buyerGuaranteeImage}
        style={{ marginRight: 10 }}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text
          style={{ color: colors.black_70,
            ...typographies.button2 }}
        >
          {i18n.t('zeroState.inbox.chat.banner.title')}
        </Text>

        <Text
          numberOfLines={3}
          style={styles.guaranteeSubText}
        >
          {i18n.t('zeroState.inbox.chat.banner.body')}
        </Text>
      </View>
    </View>
  </View>;

  export default OttoApp;
