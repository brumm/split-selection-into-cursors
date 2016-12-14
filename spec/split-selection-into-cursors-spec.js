// 'use babel';
//
// import SplitSelectionIntoCursors from '../lib/split-selection-into-cursors';
//
// describe('SplitSelectionIntoCursors', () => {
//   let workspaceElement, activationPromise;
//
//   beforeEach(() => {
//     workspaceElement = atom.views.getView(atom.workspace);
//     activationPromise = atom.packages.activatePackage('split-selection-into-cursors');
//   });
//
//   describe('when the split-selection-into-cursors:split event is triggered', () => {
//     it('hides and shows the modal panel', () => {
//       // Before the activation event the view is not on the DOM, and no panel
//       // has been created
//       expect(workspaceElement.querySelector('.split-selection-into-cursors')).not.toExist();
//
//       // This is an activation event, triggering it will cause the package to be
//       // activated.
//       atom.commands.dispatch(workspaceElement, 'split-selection-into-cursors:split');
//
//       waitsForPromise(() => {
//         return activationPromise;
//       });
//
//       runs(() => {
//         expect(workspaceElement.querySelector('.split-selection-into-cursors')).toExist();
//
//         let cursorAroundSelectionElement = workspaceElement.querySelector('.split-selection-into-cursors');
//         expect(cursorAroundSelectionElement).toExist();
//
//         let cursorAroundSelectionPanel = atom.workspace.panelForItem(cursorAroundSelectionElement);
//         expect(cursorAroundSelectionPanel.isVisible()).toBe(true);
//         atom.commands.dispatch(workspaceElement, 'split-selection-into-cursors:split');
//         expect(cursorAroundSelectionPanel.isVisible()).toBe(false);
//       });
//     });
//   });
// });
