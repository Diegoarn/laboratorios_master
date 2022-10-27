import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { DetailVm } from './detail.vm';
import { mapDetailFromApiToVm } from './detail.mappers';
import { DetailComponent } from './detail.component';
import { linkRoutes } from 'core/router';
import { createSentence } from './api';
import * as classes from './detail.styles';

export const DetailContainer: React.FunctionComponent = (props) => {
  const [detail, setDetail] = React.useState<DetailVm>();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [newSentence, setSentence] = React.useState('');

  const handleLoadDetail = async () => {
    const detail = await api.getDetail(id);
    setDetail(mapDetailFromApiToVm(detail));
  };

  const handleBack = () => {
    history.push(linkRoutes.characterCollection);
  };

  const handleCreate = async () => {
    await createSentence(detail, newSentence);
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
      <form>
        <h3>Write the best sentence:</h3>
        <input
          className={classes.input}
          value={newSentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <button className={classes.buton} onClick={() => handleCreate()}>
          Save
        </button>
      </form>
      <br />
      <button className={classes.buton} onClick={() => handleBack()}>
        Back
      </button>
    </>
  );
};
