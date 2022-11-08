import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyDetail, DetailVm } from './detail.vm';
import { mapDetailFromApiToVm } from './detail.mappers';
import { DetailComponent } from './detail.component';

export const DetailContainer: React.FunctionComponent = (props) => {
  const [detail, setDetail] = React.useState<DetailVm>(createEmptyDetail());
  const { id } = useParams<{ id: string }>();


  const handleLoadDetail = async () => {
    const detail = await api.getDetail(id);
    setDetail(mapDetailFromApiToVm(detail));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadDetail();
    }
  }, []);

  return (
    <>
      <div>
        <DetailComponent detail={detail} />
      </div>
    </>
  );
};
