import React from "react";
import { TouchableWithoutFeedback, Text, View, Image } from "react-native";
import styles from './styles'


export default function chatListItemView(item, index) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.redirectToChatConverstion(item);
        }}>
        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.subCardView}>
              <Image
                source={Images.logo}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.black,
                  fontWeight: 'bold',
                  fontFamily: Fonts.nunitoBold,
                  textTransform: 'capitalize',
                }}>
                    "HEYY"
                {/* {'itechinsiders'} */}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: Colors.gray,
                    fontSize: 12,
                  }}>
                      "There"
                  {/* {'itechinsiders'} */}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: Colors.pink,
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text style={{color: Colors.white}}>
              {/* {item.unread_messages_count} */}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
