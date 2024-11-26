// Clock.tsx
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { rem } from '@mantine/core';


export default function ClockComponent() {
  return (
    <TimeInput
      className='Horita'
      placeholder="--:--" 
    />
  );
}
