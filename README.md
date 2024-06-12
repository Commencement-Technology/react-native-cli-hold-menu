# React Native Cli Hold Menu

 [![npm](https://img.shields.io/npm/l/react-native-cli-hold-menu?style=flat-square)](https://www.npmjs.com/package/react-native-cli-hold-menu) [![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/react-native-cli-hold-menu)

A performant, easy-to-use hold to open a context menu for React Native Cli 🔥

---

![hold-menu-preview](./preview.gif)

## Features

- Smooth interactions & animations.
- Supports dark/light Mode. 🌚 🌝
- Supports device orientation change.
- Compatible with Cli.
- Written in `TypeScript`.

---
## Getting Started
- id: getting-started
- title: Getting Started
- Description: A performant, easy-to-use hold to open the context menu for React Native Cli 🔥
- hide_title: true
- slug: /
- hide_table_of_contents: true

## Installation

```cmd
yarn add react-native-cli-hold-menu
```

#### Dependencies

This library needs these dependencies to be installed in your project before you can use it:

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-unimodules @react-native-community/blur react-native-haptic-feedback
```

**React Native Gesture Handler** needs extra steps to finalize its installation, please follow their [installation instructions](https://github.com/software-mansion/react-native-gesture-handler).

**React Native Reanimated** needs extra steps to finalize its installation, please follow their [installation instructions](https://docs.swmansion.com/react-native-reanimated/docs).

---
id: props
title: Props
slug: /props
---

## HoldMenuProvider

### `iconComponent`

If you want to use an icon in your menu items, you need to set your Icon component to HoldMenuProvider to be able to use it. Then you can put just the icon's name in the menu item list with the `icon` prop like below.

:::note
Icon can be used with just **react-native-vector-icons** for now.
:::

```tsx
import FeatherIcon from 'react-native-vector-icons/Feather';

/* ... */
<HoldMenuProvider iconComponent={FeatherIcon}>

```

### `theme`

If you want to set a specific theme or change depends on your theme, use the `theme` prop like below.

Values:

| value | default |
| ----- | ------- |
| light | true    |
| dark  | false   |

```tsx
<HoldMenuProvider theme={"dark"}>
```

### `safeAreaInsets`

Set object of safe area inset values to prevent the menu from being opened under the unsafe area

#### Example

```tsx
const safeAreaInsets = useSafeAreaProvider();
<HoldMenuProvider safeAreaInsets={safeAreaInsets} />;
```

### `onOpen`

Fires callback when a menu is opened

#### Example

```tsx
const onOpen = useCallback(() => {
  console.log('App onOpen')
}, []);

<HoldMenuProvider onOpen={onOpen} />;
```

### `onClose`

Fires callback when a menu is opened

#### Example

```tsx
const onClose = useCallback(() => {
  console.log('App onClose')
}, []);

<HoldMenuProvider onClose={onClose} />;
```

## HoldItem

### `items`

An array of menu items.

| name          | type     | required |
| ------------- | -------- | -------- |
| text          | string   | YES      |
| icon          | string   | NO       |
| onPress       | function | YES      |
| isTitle       | boolean  | NO       |
| isDestructive | boolean  | NO       |
| withSeparator | boolean  | NO       |

#### Example

```tsx
<HoldItem
  items={[
    { text: 'Actions', isTitle },
    { text: 'Action 1', onPress: () => {} },
    { text: 'Action 2', isDestructive, icon: 'trash', onPress: () => {} },
  ]}
/>
```

Check out the other examples [here](examples).

### `actionParams`

An object of keys the same name with items to match parameters to onPress actions. If you want to pass different parameters for HoldItem to menu item `onPress` handlers ([check example](https://github.com/Commencement-Technology/react-native-cli-hold-menu/blob/main/example/src/screens/HomeScreen.tsx)), you need to use this prop to set params per HoldItem.

> The reason to provide action params with another prop is to make it able to pass with shared value without performance issues.

| type                      | required |
| ------------------------- | -------- |
| { [name: string]: any[] } | NO       |

#### Example

```tsx
const items = [
 {text: 'Reply', onPress: (messageId) => {}},
 {text: 'Copy', onPress: (messageText, index) => {}},
]

<HoldItem
   items={items}
   actionParams={{
     Reply: ['dd443224-7f43'],
     Copy: ['Hello World!', 1]
   }}
><View/></HoldItem>
```

### `activateOn`

Type of behaviour to activate menu action.

| type                            | default | required |
| ------------------------------- | ------- | -------- |
| tap <br/> double-tap <br/> hold | hold    | NO       |

#### Example

```tsx
<HoldItem activateOn="double-tap" />
```

### `hapticFeedback`

Type of haptic feedback behaviour.

| value                                                                                                             | default  | required |
| ----------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| "None" <br/> "Selection" <br/> "Light" <br/> "Medium" <br/> "Heavy" <br/> "Success" <br/> "Warning" <br/> "Error" | "Medium" | NO       |

#### Example

```tsx
<HoldItem hapticFeedback="Heavy" />
```

### `menuAnchorPosition`

The menu anchor position is calculated automatically. But you can override the calculation by passing an anchor position.
Auto calculation will be `top-left`, `top-center` or `top-right`. If you want to open the menu from the bottom, you need to use
`bottom-left`, `bottom-center` or `bottom-right`. Or if you want to use auto calculation for the bottom, see [`bottom`](#bottom) prop.

| value                                                                                                          | required |
| -------------------------------------------------------------------------------------------------------------- | -------- |
| "top-center" <br/> "top-left" <br/> "top-right" <br/> "bottom-center" <br/> "bottom-left" <br/> "bottom-right" | NO       |

#### Example

```tsx
<HoldItem menuAnchorPosition="top-center" />
```

### `bottom`

Hold Menu automatically calculates if you do not set [`menuAnchorPosition`](#menuanchorposition).
If you want to open the menu from the bottom like _Telegram bottom nav buttons in iOS_ and use auto anchor calculation,
you should set `bottom` as true.

| type    | default | required |
| ------- | ------- | -------- |
| boolean | false   | NO       |

#### Example

```tsx
<HoldItem menuAnchorPosition="top-center" bottom />
```

### `disableMove`

You may need to disable the move of the held item for your example. Set it true.

| type    | default | required |
| ------- | ------- | -------- |
| boolean | false   | NO       |

#### Example

```tsx
<HoldItem menuAnchorPosition="top-center" disableMove />
```

### `styles`

`HoldItem` container styles. You may need **dynamic width or hight** for some examples like message boxes. See the Whatsapp example.

| type                     | default | required |
| ------------------------ | ------- | -------- |
| ViewStyle \| ViewStyle[] | {}      | NO       |

#### Example

```tsx
// For Whatsapp example
<HoldItem
  styles={{
    position: 'relative',
    maxWidth: '80%',
  }}
/>
```

### `closeOnTap`

Set true if you want to close the menu when tapping to HoldItem

| type    | default | required |
| ------- | ------- | -------- |
| boolean | false   | NO       |

#### Example

```tsx
<HoldItem closeOnTap />
```

### `longPressMinDurationMs`

Set the delay before a long tap will activate the gesture. May be useful to increase this value in lists

| type    | default | required |
| ------- | ------- | -------- |
| number  | 150     | NO       |

#### Example

```tsx
<HoldItem longPressMinDurationMs={250} />
```
---

## Contributors

- [Commencement Technology](https://commencement.technology/)

## License

[MIT](./LICENSE)

#### Show Your Support

Please give a star if you like this project! 🤩
