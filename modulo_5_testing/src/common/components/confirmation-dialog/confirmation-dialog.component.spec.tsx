import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from 'common/components/confirmation-dialog/confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('confirmation-dialog', () => {
  it('should display title ', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.getByText(props.title);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  it('button Cancelar', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: '',
      },
      children: '',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonCloseElement = screen.getByRole('button', { name: 'Cancelar' });
    await userEvent.click(buttonCloseElement);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('button Aceptar', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: '',
        acceptButton: 'Aceptar',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonAcceptElement = screen.getByRole('button', {
      name: 'Aceptar',
    });
    await userEvent.click(buttonAcceptElement);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });
});
