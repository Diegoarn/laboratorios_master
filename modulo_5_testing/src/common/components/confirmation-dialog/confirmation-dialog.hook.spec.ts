import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from 'common/components/confirmation-dialog/confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('isOpen', () => {
    // Arrange
    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    // Assert

    expect(result.current.isOpen).toEqual(expect.any(Boolean));
  });

  it('isOpen default is false', () => {
    // Arrange
    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    // Assert

    expect(result.current.isOpen).toEqual(false);
  });

  it('should return lookout empty object when it feeds itemDelete ', () => {
    // Arrange
    const emtyObject: Lookup = {
      id: '',
      name: '',
    };

    // Act

    const { result } = renderHook(() => useConfirmationDialog());

    // Assert

    expect(result.current.itemToDelete).toEqual(emtyObject);
  });

  it('openDialog, isOpen is true, itemToDelete ', () => {
    // Arrange
    const defaultItemDelete: Lookup = {
      id: '1',
      name: 'John',
    };

    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(defaultItemDelete);
    });

    // Assert

    expect(result.current.itemToDelete).toEqual(defaultItemDelete);
    expect(result.current.isOpen).toEqual(true);
  });

  it('onAccept, isOpen is true, itemToDelete ', () => {
    // Arrange
    const emtyObject: Lookup = {
      id: '',
      name: '',
    };

    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onAccept();
    });

    // Assert

    expect(result.current.itemToDelete).toEqual(emtyObject);
    expect(result.current.isOpen).toEqual(false);
  });
});
