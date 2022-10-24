import React from 'react';
import { DetailVm } from './detail.vm';
import * as classes from './detail.styles';

interface Props {
  detail: DetailVm;
}

export const DetailComponent: React.FunctionComponent<Props> = (props) => {
  const { detail } = props;
  if (detail != undefined) {
    return (
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
    );
  }

  return <h2>Error</h2>;
};
