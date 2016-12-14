'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'split-selection-into-cursors:split': this.split
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  split() {
    let editor = atom.workspace.getActiveTextEditor();
    let selectionRanges = editor.getSelectedBufferRanges();
    editor.clearSelections();

    selectionRanges.forEach(({ start, end }) => {
      editor.addCursorAtBufferPosition(start);
      editor.addCursorAtBufferPosition(end);
    });
  }

};
