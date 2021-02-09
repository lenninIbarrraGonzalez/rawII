import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="text" width={190} />
      <Skeleton variant="rect" width={290} height={400} />
      <Skeleton variant="text" width={60} />
      <Skeleton variant="text" />
    </div>
  );
}
