import * as apiModel from 'pods/project/api/project.api-model';
import * as viewModel from 'pods/project/project.vm';
import { mapProjectFromApiToVm } from 'pods/project/project.mapper';

describe('project mapper', () => {
  it('should return empty object when it feeds undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;
    // Act
    const result = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty object when it feeds null', () => {
    // Arrange
    const project: apiModel.Project = null;
    // Act
    const result = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty object when it feeds with empty object', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    // Act
    const result = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return project object when it feeds with object', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'John',
      externalId: '2',
      comments: '',
      isActive: true,
      employees: [{ id: '1', isAssigned: true, employeeName: '' }],
    };
    // Act
    const result = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(project);
  });
});
