import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';
export default function useAccessibilityInfo() {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  const handleReduceMotionChanged = enabled => setReduceMotionEnabled(enabled);

  const handleScreenReaderChanged = enabled => setScreenReaderEnabled(enabled);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(handleReduceMotionChanged);
    AccessibilityInfo.isScreenReaderEnabled().then(handleScreenReaderChanged);
    AccessibilityInfo.addEventListener('reduceMotionChanged', handleReduceMotionChanged);
    AccessibilityInfo.addEventListener('screenReaderChanged', handleScreenReaderChanged);
    return () => {
      AccessibilityInfo.removeEventListener('reduceMotionChanged', handleReduceMotionChanged);
      AccessibilityInfo.removeEventListener('screenReaderChanged', handleScreenReaderChanged);
    };
  }, []);
  return {
    reduceMotionEnabled,
    screenReaderEnabled
  };
}