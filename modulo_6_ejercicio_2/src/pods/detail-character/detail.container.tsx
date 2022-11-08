import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyDetail, DetailVm, BestSentence } from './detail.vm';
import { mapDetailFromApiToVm } from './detail.mappers';
import { DetailComponent } from './detail.component';
import { deleteSentence, upDateSentece } from './api';
import * as classes from './detail.styles';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

export const DetailContainer: React.FunctionComponent = (props) => {
  const [detail, setDetail] = React.useState<DetailVm>(createEmptyDetail());
  const { id } = useParams<{ id: string }>();
  const [newSentence, setSentence] = React.useState('');

  const history = useHistory();

  const handleCreate = async () => {
    if (newSentence !== '') {
      const newBestSentence: BestSentence = {
        id: `${Math.random()}`,
        phrase: newSentence,
      };

      const newDetail = {
        ...detail,
        bestSentences: [...detail.bestSentences, newBestSentence],
      };

      setDetail({
        ...detail,
        bestSentences: [...detail.bestSentences, newBestSentence],
      });
      await upDateSentece(newDetail);
      history.push(linkRoutes.characterCollection);
    } else {
      alert('No text');
    }
  };

  const handlerDeleteSentence = async (id) => {
    const newBestSentences = detail.bestSentences.filter((bestSentence) => {
      return bestSentence.id !== id;
    });
    const newDetail: DetailVm = {
      ...detail,
      bestSentences: newBestSentences,
    };
    await deleteSentence(newDetail);
    setDetail(newDetail);
  };

  const setBestSentences = async (bestSentences) => {
    setDetail({ ...detail, bestSentences });
  };

  const upDateBestSentences = async () => {
    await upDateSentece(detail);
  };

  const handleLoadDetail = async () => {
    const detail = await api.getDetail(id);
    setDetail(mapDetailFromApiToVm(detail));
  };

  const handleBack = () => {
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
        <DetailComponent
          detail={detail}
          onDelete={handlerDeleteSentence}
          onChangePhrase={setBestSentences}
          upDateBestSentences={upDateBestSentences}
        />
      </div>
      <br />
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
