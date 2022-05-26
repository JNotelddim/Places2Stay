export interface SearchStepProps {
  title: string;
  cityName: string;
  showSkip?: boolean;
  showNext?: boolean;
  onNextPress?: () => void;
  onSkipPress?: () => void;
  nextDisabled?: boolean;
}
