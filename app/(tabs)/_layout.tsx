import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { spacing, Theme } from '@/theme';
import { ViewStyle } from 'react-native';
import { useTheme } from '@/theme/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon, Text } from '@/components/cores';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  const color = theme.colors.palette.neutral[500];
  const focusedColor = theme.colors.palette.primary[500];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: [$tabBar(theme), { height: bottom + 70 }],
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              text="Home"
              preset="Text xs"
              weight="bold"
              style={{ color: focused ? focusedColor : color }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="home"
              color={focused ? focusedColor : color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              text="Explore"
              preset="Text xs"
              weight="bold"
              style={{ color: focused ? focusedColor : color }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="receipt"
              color={focused ? focusedColor : color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              text="Notification"
              preset="Text xs"
              weight="bold"
              style={{ color: focused ? focusedColor : color }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="bell"
              color={focused ? focusedColor : color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              text="Account"
              preset="Text xs"
              weight="bold"
              style={{ color: focused ? focusedColor : color }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="user"
              color={focused ? focusedColor : color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const $tabBar = (theme: Theme): ViewStyle => ({
  backgroundColor: theme.colors.palette.neutral.contrastText,
  borderTopColor: theme.colors.transparent,
  elevation: 10,
  shadowColor: theme.colors.palette.neutral[700],
  shadowOffset: {
    width: 0,
    height: 0.96,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.85,
});

const $tabBarItem: ViewStyle = {
  paddingVertical: spacing.medium,
};
