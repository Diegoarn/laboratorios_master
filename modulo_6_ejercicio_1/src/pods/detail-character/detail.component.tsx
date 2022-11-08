import React from 'react';
import { DetailVm } from './detail.vm';
import * as classes from './detail.styles';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

interface Props {
  detail: DetailVm;
}

export const DetailComponent: React.FunctionComponent<Props> = (props) => {
  const { detail } = props;
  const history = useHistory();

  const handleBack = () => {
    history.push(linkRoutes.characterCollection);
  };

  return (
    <>
      <table className={classes.root}>
        <tr key={detail.id}>
          <td>
            <span className={classes.span}>Name: {detail.name}</span>
          </td>
          <br />
          <td>
            <span className={classes.span}>Status: {detail.status}</span>
          </td>
          <br />
          <td>
            <span className={classes.span}>Species: {detail.species}</span>
          </td>
          <br />
          <td>
            <span className={classes.span}>Gender: {detail.gender}</span>
          </td>
        </tr>
      </table>
      <br />
      <button className={classes.buton} onClick={() => handleBack()}>
        Back
      </button>
    </>
  );
};
