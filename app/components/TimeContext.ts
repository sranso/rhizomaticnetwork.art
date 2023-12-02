import { createContext, useContext } from 'react';

interface TimeState {
  time: Date;
}

export function amPm(time: Date): 'am' | 'pm' {
  const hours = time.getHours();
  return hours > 11 && hours < 24 ? 'pm' : 'am';
}

export function useTimeContext() {
  const timeContext = useContext(TimeContext);

  if (!timeContext) {
    throw new Error(
      'TimeContext required, check that OnboardingContext.Provider is used and has a value.'
    );
  }

  return timeContext;
}

const TimeContext = createContext<TimeState | null>(null);

export default TimeContext;
