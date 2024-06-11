// HomeScreen.tsx
import React, { useCallback, useMemo } from 'react';
import { View, Alert } from 'react-native';
import { HoldItem } from 'react-native-hold-menu';
import StyleGuide from './styleGuide';
import styles from './styles';

const HomeScreen = () => {
  const replyMessage = useCallback((messageId: string) => {
    Alert.alert(`[ACTION]: REPLY' ${messageId}`);
  }, []);

  const copyMessage = useCallback((messageText: string) => {
    Alert.alert(`[ACTION]: REPLY' ${messageText}`);
  }, []);

  const editMessage = useCallback((messageId: string, messageText: string) => {
    Alert.alert(`[ACTION]: REPLY' ${messageId} - ${messageText}`);
  }, []);

  const myMenu = [
    {
      text: 'Reply1',
      icon: 'corner-down-left',
      onPresss: replyMessage,
    },
    {
      text: 'Copy1',
      icon: 'copy',
      onPress: copyMessage,
    },
    {
      text: 'Edit1',
      icon: 'home',
      onPress: editMessage,
    },
    {
      text: 'Pin1',
      icon: 'map-pin',
      onPress: () => {},
    },
    {
      text: 'Forward1',
      icon: 'corner-up-right',
      onPress: () => {},
    },
    {
      text: 'Delete1',
      icon: 'trash-2',
      onPress: () => {},
    },
  ];

  const items = [
    {
      isTitle: true,
      text: 'Actions',
    },
    {
      text: 'Home',
      icon: 'home',
      onPress: () => {
        console.log('[ACTION]: Home');
      },
    },
    {
      text: 'Edit',
      icon: 'edit',
      onPress: () => {
        console.log('[ACTION]: Edit');
      },
    },
    {
      text: 'Download',
      onPress: () => {
        console.log('[ACTION]: Download');
      },
      icon: 'download',
    },
    {
      text: 'Delete',
      onPress: () => {
        console.log('[ACTION]: Delete');
      },
      icon: 'trash',
      withSeparator: true,
      isDestructive: true,
    },
    {
      text: 'Share',
      onPress: () => {
        console.log('[ACTION]: Share');
      },
      icon: 'share',
    },
    {
      text: 'More',
      onPress: () => {
        console.log('[ACTION]: More');
      },
      icon: 'more-horizontal',
    },
  ];

  const themeStyles = useMemo(() => {
    return {
      containerStyles: [
        styles.container,
        { backgroundColor: StyleGuide.palette['light'].backgroundColor },
      ],
      item: [
        styles.item,
        { backgroundColor: StyleGuide.palette['light'].primary },
      ],
      dot: [
        styles.dot,
        { backgroundColor: StyleGuide.palette['light'].primaryDark },
      ],
      footer: [
        styles.footer,
        { borderColor: StyleGuide.palette['light'].secondary },
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
         <HoldItem items={items}>
            <View style={themeStyles.item}>
              <View style={[themeStyles.dot, styles.topCenter]} />
            </View>
          </HoldItem>
    </View>
  );
}

export default HomeScreen;
