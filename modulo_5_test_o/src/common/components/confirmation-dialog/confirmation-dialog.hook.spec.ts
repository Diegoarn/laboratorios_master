import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('isOpen', () => {
    // Arrange
    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    // Assert

    expect(result.current.isOpen).toEqual(expect.any(Boolean));
  });

  it('setIsOpen', () => {
    // Arrange
    const newIsOpen = true;

    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.setIsOpen(newIsOpen);
    });

    // Assert

    expect(result.current.isOpen).toEqual(newIsOpen);
  });

  it('itemToDelete', () => {
    // Arrange
    const defaultItemDelete: Lookup = {
      id: '',
      name: '',
    };
    // Act

    const { result } = renderHook(() => useConfirmationDialog());

    // Assert

    expect(result.current.itemToDelete).toEqual(defaultItemDelete);
  });
  it('setItemToDelete ', () => {
    // Arrange
    const defaultItemDelete: Lookup = {
      id: '',
      name: '',
    };
    // Act

    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.setItemToDelete(defaultItemDelete);
    });

    // Assert

    expect(result.current.itemToDelete).toEqual(defaultItemDelete);
  });
});
