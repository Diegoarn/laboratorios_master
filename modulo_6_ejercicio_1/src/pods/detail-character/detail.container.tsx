import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { DetailVm } from './detail.vm';
import { mapDetailFromApiToVm } from './detail.mappers';
import { DetailComponent } from './detail.component';
import { linkRoutes } from 'core/router';

export const DetailContainer: React.FunctionComponent = (props) => {
  const [detail, setDetail] = React.useState<DetailVm>();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleLoadDetail = async () => {
    const detail = await api.getDetail(id);
    setDetail(mapDetailFromApiToVm(detail));
  };

  const handleEdit = () => {
    history.push(linkRoutes.characterCollection);
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
      <br />
      <button onClick={() => handleEdit()}>Back</button>
    </>
  );
};
