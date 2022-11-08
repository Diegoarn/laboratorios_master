import React from 'react';
import { DetailVm } from './detail.vm';
import * as classes from './detail.styles';

interface Props {
  detail: DetailVm;
  onDelete: (index) => void;
  onChangePhrase: (bestSentences) => void;
  upDateBestSentences: () => void;
}

export const DetailComponent: React.FunctionComponent<Props> = (props) => {
  const { detail, onDelete, onChangePhrase, upDateBestSentences } = props;

  const updateBestSentences = (id, phrase) => {
    const newBestSentences = detail.bestSentences.map((bestSentence) => {
      if (bestSentence.id === id) {
        return {
          ...bestSentence,
          phrase,
        };
      } else {
        return bestSentence;
      }
    });

    onChangePhrase(newBestSentences);
  };
  return (
    <>
      <h2>Character details:</h2>
      <table className={classes.root}>
        <tr key={detail.id} className={classes.table}>
          <td>
            <span className={classes.span}>Name: {detail.name}</span>
          </td>
          <td>
            <span className={classes.span}>Status: {detail.status}</span>
          </td>
          <td>
            <span className={classes.span}>Species: {detail.species}</span>
          </td>
          <td>
            <span className={classes.span}>Gender: {detail.gender}</span>
          </td>
          <td>
            <span className={classes.span}>
              Best Sentences:
              {detail.bestSentences.map((bestSentence, index) => (
                <>
                  <table className={classes.edit}>
                    <input
                      className={classes.phrases}
                      type="text"
                      id={index.toString()}
                      value={bestSentence.phrase}
                      onChange={(e) =>
                        updateBestSentences(bestSentence.id, e.target.value)
                      }
                    />
                    <button
                      className={classes.buton2}
                      onClick={() => onDelete(bestSentence.id)}
                    >
                      Delete
                    </button>
                    <button
                      className={classes.buton2}
                      onClick={() => upDateBestSentences()}
                    >
                      Change
                    </button>
                  </table>
                </>
              ))}
            </span>
          </td>
        </tr>
      </table>
    </>
  );
};
