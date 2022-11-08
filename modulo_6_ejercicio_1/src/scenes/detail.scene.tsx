import * as React from 'react';
import { AppLayout } from 'layouts';
import { DetailContainer } from 'pods/detail-character';
import { useParams } from 'react-router-dom';

export const DetailScene = () => {
  // const { id } = useParams();

  return (
    <AppLayout>
      <DetailContainer />
    </AppLayout>
  );
};
