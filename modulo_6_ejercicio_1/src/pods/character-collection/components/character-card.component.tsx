import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import Button from '@material-ui/core/Button';
import { linkRoutes } from 'core/router';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const history = useHistory();

  const handleEdit = (id: string) => {
    history.push(linkRoutes.detailCharacter(id));
  };

  return (
    <div className={classes.content}>
      <Button onClick={() => handleEdit(character.id.toString())}>
        <Card>
          <CardHeader title={character.name} />
          <CardContent>
            <div className={classes.content}>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{ height: 0, paddingTop: '56.25%' }}
              />
            </div>
          </CardContent>
        </Card>
      </Button>
    </div>
  );
};
