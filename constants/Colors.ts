// constants/Colors.ts

const tintColorLight = '#087E8B'; // A sophisticated Teal - Primary Accent
const tintColorDark = '#67E8F9'; // Use white for text/icons on dark backgrounds

export default {
  light: {
    text: '#1C1C1E', // Almost black - high contrast for readability
    textSecondary: '#636366', // Dark gray for secondary info (e.g., artist names)
    textSubtle: '#8E8E93', // Medium gray for less emphasis (e.g., time labels)
    background: '#FFFFFF', // Clean white background
    card: '#F2F0EC', // Card background (rely on shadows/borders for separation)
    border: '#E5E5EA', // Subtle border/separator line color
    tint: tintColorLight, // Primary accent color
    iconDefault: '#8E8E93', // Default icon color (matches subtle text)
    iconActive: tintColorLight, // Active icon color (matches tint)
    tabIconDefault: '#8E8E93', // Default tab icon color
    tabIconSelected: tintColorLight, // Selected tab icon color
    tabBar: '#FFFFFF', // Tab bar background
    disabled: '#AEAEB2', // For disabled elements/text
    error: '#FF3B30', // Standard iOS error red
    statusBar: 'dark-content', // Status bar style for light background
    trackBackground: '#E5E5EA', // Background of the progress bar track
    trackTint: tintColorLight, // Color of the elapsed part of the progress bar
    thumbTint: tintColorLight, // Color of the slider thumb
    warning: '#F59E0B',
    warningBackground: '#FEF3C7'
    // Add more as needed: success, warning, info, button backgrounds/text etc.
  },

  dark: {
    text: '#FFFFFF', // White text for dark mode
    textSecondary: '#D1D1D6', // Light gray for secondary info
    textSubtle: '#8E8E93', // Medium gray for less emphasis
    background: '#000000', // Black background for dark mode
    card: '#1C1C1E', // Dark card background
    border: '#3A3A3C', // Darker border/separator line color
    tint: tintColorDark, // White for dark mode
    iconDefault: '#8E8E93', // Default icon color (matches subtle text)
    iconActive: tintColorDark, // Active icon color (matches tint)
    tabIconDefault: '#8E8E93', // Default tab icon color
    tabIconSelected: tintColorDark, // Selected tab icon color
    tabBar: '#000000', // Tab bar background
    disabled: '#636366', // For disabled elements/text
    error: '#FF3B30', // Standard iOS error red
    statusBar: 'light-content', // Status bar style for dark background
    trackBackground: '#3A3A3C', // Background of the progress bar track
    trackTint: tintColorDark, // Color of the elapsed part of the progress bar
    thumbTint: tintColorDark, // Color of the slider thumb
    warning: '#FBBF24',
    warningBackground: '#451A03'
  }
}